import fs from 'fs';

const player_data={
"1":["player1","https://github.com/AnishCodeth/AnishCodeth/blob/main/human.webp"],
"2":["player2","https://github.com/AnishCodeth/AnishCodeth/blob/main/robo.webp"],
"0":["empty","https://github.com/AnishCodeth/AnishCodeth/blob/main/click.webp"],
"player1":1,
"player2":-1,
"empty":0
}


const check_win=async(values)=>{
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    for (let [a,b,c] of winPatterns)
    {
      sum=values[a]+values[b]+values[c]
      if (sum==3)
      {
        return ([a,b,c],1)
      }
      else if(sum==-3)
      {
        return ([a,b,c],-1)
      }
    }
    return false
}

// //to make board 
// const makeArray=async(file)=>{
// const board=[]
// for (let x in file){
// board.push(parseInt(x))
// }
// return board
// }

//which player is playing
const which_player=async(file)=>{
    let sum=0
for (let x in file){
sum+=Math.abs(file[x])
}
return sum%2==0?player_data['player1']:player_data['player2'] //first is player1
}


//to create readme
const create_readme=async(file,win=undefined)=>
{
    let html=""

for (let i=0;i<9;i++)
{
    if (i%3==0){
    html+='<tr>'
    }
    html+=`<td>
    <img src=${player_data[file[i].toString()[1]]} height="50px" width="50px">((https://github.com/YOUR_USERNAME/tic-tac-toe/issues/?title=${i}))
    </td>`
    if ((i+1)%3==0){
        html+='</tr>'
        }
}
return html?win:html+`<p>win by:${player_data[win.toString()]}</p>`
}

//main function
const main=async()=>{
    const issue_title=parseInt(process.env.issue_title)
    let board_file=JSON.parse(fs.readFileSync('board.json',"utf-8"))
    let readme_file=fs.readFileSync('README.md',"utf-8")

    const player=which_player(file) //1 or -1

    const board=board_file.board //1 or -1 or 0 format
    board[issue_title]=player_data[player]

    if (!check_win(board))
    {
        readme_file=readme_file.replace('<table>*</table>',create_readme(board))
        fs.writeFileSync('README.md', readme_file);
    }
    else{
        readme_file=readme_file.replace('<table>*</table>',create_readme(file,player))
        fs.writeFileSync('README.md', readme_file);
        for (let x of board){
            board[x]=player_data[empty]
        }
    }
    fs.writeFileSync('board.json',JSON.stringify({"board":board}))
}

main()