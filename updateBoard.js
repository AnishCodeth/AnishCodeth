import fs from 'fs';

const player_data={
"1":["player1","https://github.com/AnishCodeth/AnishCodeth/blob/main/human.webp"],
"-1":["player2","https://github.com/AnishCodeth/AnishCodeth/blob/main/robo.webp"],
"0":["empty","https://github.com/AnishCodeth/AnishCodeth/blob/main/click.webp"],
"player1":1,
"player2":-1,
"empty":0
}


const check_win=async(values)=>{
    let sum=0
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
    let html="<table>"

for (let i=0;i<9;i++)
{
    if (i%3==0){
    html+='<tr>'
    }
    html+=`<td>a
    <a href=${file[i.toString()]==0?"https://github.com/anish-codeth/anish-codeth/issues/new?title="+i:"https://github.com/anish-codeth"}><img src=${player_data[file[i].toString()][1]} height="50px" width="50px"></a>
    </td>`
    if ((i+1)%3==0){
        html+='</tr>'
        }
}
html+='</table>'
if (win=='draw'){
    return html+'<p>Draw</p>'
}
else if(win){
    return html+`<p>win by:${player_data[win.toString()]}</p>`
}
else {
    return html
}

}

//main function
const main=async()=>{
    const issue_title=parseInt(process.env.ISSUE_TITLE )-1 || 2
    let board_file=JSON.parse(fs.readFileSync('value.json',"utf-8"))
    let readme_file=fs.readFileSync('README.md',"utf-8")

    
    const board=board_file.board //1 or -1 or 0 format
    const player=await which_player(board) //1 or -1
    board[issue_title]=player
    const check_win_result=await check_win(board)

    if (!check_win_result)
    {
        //draw
        if(board.filter((x)=>x==0).length==0){
            for (let x in board){
                board[x]=player_data["empty"]
            }
        }
        //nothing
    }
    else{
        //win
        for (let x in board){
            board[x]=player_data["empty"]
        }
    }

    readme_file = readme_file.replace(/<table>[\s\S]*?<\/table>/g, await create_readme(board));
    fs.writeFileSync('README.md', readme_file);
    fs.writeFileSync('value.json',JSON.stringify({"board":board}))
}

main()