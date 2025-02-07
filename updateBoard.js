import fs from 'fs';

const player_data = {
  "1": ["human", "https://github.com/AnishCodeth/AnishCodeth/blob/main/human.webp"],
  "-1": ["robot", "https://github.com/AnishCodeth/AnishCodeth/blob/main/robo.webp"],
  "0": ["empty", "https://github.com/AnishCodeth/AnishCodeth/blob/main/click.webp"],
  "human": 1,
  "robot": -1,
  "empty": 0
};

const check_win = async (values) => {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];
  
  for (let [a, b, c] of winPatterns) {
    let sum = values[a] + values[b] + values[c];
    if (sum === 3) return { positions: [a, b, c], winner: 1 };
    if (sum === -3) return { positions: [a, b, c], winner: -1 };
  }
  return false;
};

const which_player = async (file) => {
  let count = Object.values(file).filter(x => x !== 0).length;
  return count % 2 === 0 ? 1 : -1;
};

const create_readme = async (file, win = undefined) => {
  let html = "<table>";
  
  for (let i = 0; i < 9; i++) {
    if (i % 3 === 0) html += '<tr>';
    
    html += `<td>
    <a href=${file[i.toString()] === 0 ? "https://github.com/AnishCodeth/anishcodeth/issues/new?title=" + i : "https://github.com/anishcodeth"}>
    <img src=${player_data[file[i].toString()][1]} height="50px" width="50px"></a>
    </td>`;
    
    if ((i + 1) % 3 === 0) html += '</tr>';
  }
  
  
  if (win === 'draw') return html + '<td>Draw</td></table>';
  if (win === 'nothing') return html+'</table>';
  return html + `<td>Win by: ${win}</td>`+'</table>'
};

const empty_board = (board) => {
  Object.keys(board).forEach(key => board[key] = 0);
};

const reset_game = async (board, readme_file) => {
  empty_board(board);
  const readme_content = await create_readme(board);
  readme_file = readme_file.replace(/<table>[\s\S]*?<\/table>/g, readme_content);
  fs.writeFileSync('README.md', readme_file);
  fs.writeFileSync('value.json', JSON.stringify({ "board": board }));
};

const main = async () => {
  const issue_title = process.env.ISSUE_TITLE ? parseInt(process.env.ISSUE_TITLE) : 'reset';
  let board_file = JSON.parse(fs.readFileSync('value.json', "utf-8"));
  let readme_file = fs.readFileSync('README.md', "utf-8");
  const board = board_file.board;

  if (issue_title === "reset") {
    reset_game(board, readme_file);
    return;
  }

  const player = await which_player(board);
  board[issue_title] = player;

  const check_win_result = await check_win(board);
  let what_happen = 'nothing';

  if (!check_win_result) {
    if (!Object.values(board).includes(0)) {
      empty_board(board);
      what_happen = 'draw';
    }
  } else {
    what_happen = player_data[player][0];
  }

  const readme_content = await create_readme(board, what_happen);
  readme_file = readme_file.replace(/<table>[\s\S]*?<\/table>/g, readme_content);
  fs.writeFileSync('README.md', readme_file);
  fs.writeFileSync('value.json', JSON.stringify({ "board": board }));
};

main();
