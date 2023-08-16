/* 3980 선발 명단 */

/* input.txt
   1
   100 0 0 0 0 0 0 0 0 0 0
   0 80 70 70 60 0 0 0 0 0 0
   0 40 90 90 40 0 0 0 0 0 0
   0 40 85 85 33 0 0 0 0 0 0
   0 70 60 60 85 0 0 0 0 0 0
   0 0 0 0 0 95 70 60 60 0 0
   0 45 0 0 0 80 90 50 70 0 0
   0 0 0 0 0 40 90 90 40 70 0
   0 0 0 0 0 0 50 70 85 50 0
   0 0 0 0 0 0 66 60 0 80 80
   0 0 0 0 0 0 50 50 0 90 88
*/

const input = require("fs").readFileSync("input.txt").toString().split("\n");
const C = +input[0];

function player(obj) {
  let max = 0;

  for (let a = 0; a < obj[0].length; a++) {
    let sum = 0;

    sum += +obj[0][a][1];
    for (let b = 0; b < obj[1].length; b++) {
      if (obj[0][a][0] === obj[1][b][0]) continue;

      sum += +obj[1][b][1];
      for (let c = 0; c < obj[2].length; c++) {
        if (obj[0][a][0] === obj[2][c][0] || obj[1][b][0] === obj[2][c][0])
          continue;

        sum += +obj[2][c][1];
        for (let d = 0; d < obj[3].length; d++) {
          if (
            obj[0][a][0] === obj[3][d][0] ||
            obj[1][b][0] === obj[3][d][0] ||
            obj[2][c][0] === obj[3][d][0]
          )
            continue;

          sum += +obj[3][d][1];
          for (let e = 0; e < obj[4].length; e++) {
            if (
              obj[0][a][0] === obj[4][e][0] ||
              obj[1][b][0] === obj[4][e][0] ||
              obj[2][c][0] === obj[4][e][0] ||
              obj[3][d][0] === obj[4][e][0]
            )
              continue;

            sum += +obj[4][e][1];
            for (let f = 0; f < obj[5].length; f++) {
              if (
                obj[0][a][0] === obj[5][f][0] ||
                obj[1][b][0] === obj[5][f][0] ||
                obj[2][c][0] === obj[5][f][0] ||
                obj[3][d][0] === obj[5][f][0] ||
                obj[4][e][0] === obj[5][f][0]
              )
                continue;

              sum += +obj[5][f][1];
              for (let g = 0; g < obj[6].length; g++) {
                if (
                  obj[0][a][0] === obj[6][g][0] ||
                  obj[1][b][0] === obj[6][g][0] ||
                  obj[2][c][0] === obj[6][g][0] ||
                  obj[3][d][0] === obj[6][g][0] ||
                  obj[4][e][0] === obj[6][g][0] ||
                  obj[5][f][0] === obj[6][g][0]
                )
                  continue;

                sum += +obj[6][g][1];
                for (let h = 0; h < obj[7].length; h++) {
                  if (
                    obj[0][a][0] === obj[7][h][0] ||
                    obj[1][b][0] === obj[7][h][0] ||
                    obj[2][c][0] === obj[7][h][0] ||
                    obj[3][d][0] === obj[7][h][0] ||
                    obj[4][e][0] === obj[7][h][0] ||
                    obj[5][f][0] === obj[7][h][0] ||
                    obj[6][g][0] === obj[7][h][0]
                  )
                    continue;

                  sum += +obj[7][h][1];
                  for (let i = 0; i < obj[8].length; i++) {
                    if (
                      obj[0][a][0] === obj[8][i][0] ||
                      obj[1][b][0] === obj[8][i][0] ||
                      obj[2][c][0] === obj[8][i][0] ||
                      obj[3][d][0] === obj[8][i][0] ||
                      obj[4][e][0] === obj[8][i][0] ||
                      obj[5][f][0] === obj[8][i][0] ||
                      obj[6][g][0] === obj[8][i][0] ||
                      obj[7][h][0] === obj[8][i][0]
                    )
                      continue;

                    sum += +obj[8][i][1];
                    for (let j = 0; j < obj[9].length; j++) {
                      if (
                        obj[0][a][0] === obj[9][j][0] ||
                        obj[1][b][0] === obj[9][j][0] ||
                        obj[2][c][0] === obj[9][j][0] ||
                        obj[3][d][0] === obj[9][j][0] ||
                        obj[4][e][0] === obj[9][j][0] ||
                        obj[5][f][0] === obj[9][j][0] ||
                        obj[6][g][0] === obj[9][j][0] ||
                        obj[7][h][0] === obj[9][j][0] ||
                        obj[8][i][0] === obj[9][j][0]
                      )
                        continue;

                      sum += +obj[9][j][1];
                      for (let k = 0; k < obj[10].length; k++) {
                        if (
                          obj[0][a][0] === obj[10][k][0] ||
                          obj[1][b][0] === obj[10][k][0] ||
                          obj[2][c][0] === obj[10][k][0] ||
                          obj[3][d][0] === obj[10][k][0] ||
                          obj[4][e][0] === obj[10][k][0] ||
                          obj[5][f][0] === obj[10][k][0] ||
                          obj[6][g][0] === obj[10][k][0] ||
                          obj[7][h][0] === obj[10][k][0] ||
                          obj[8][i][0] === obj[10][k][0] ||
                          obj[9][j][0] === obj[10][k][0]
                        )
                          continue;

                        sum += +obj[10][k][1];
                        if (max < sum) max = sum;
                        sum -= +obj[10][k][1];
                      }
                      sum -= +obj[9][j][1];
                    }
                    sum -= +obj[8][i][1];
                  }
                  sum -= +obj[7][h][1];
                }
                sum -= +obj[6][g][1];
              }
              sum -= +obj[5][f][1];
            }
            sum -= +obj[4][e][1];
          }
          sum -= +obj[3][d][1];
        }
        sum -= +obj[2][c][1];
      }
      sum -= +obj[1][b][1];
    }
    sum -= +obj[0][a][1];
  }

  console.log(max);
}

function check(arr) {
  let info = {};
  for (let i = 0; i < 11; i++) {
    info[i] = [];
  }

  for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
      if (arr[i][j] === 0) continue;
      info[j].push([i, arr[i][j]]);
    }
  }

  player(info);
}

for (let i = 1; i < input.length; i += 11) {
  let people = input.slice(i, i + 11).map((str) => str.split(" ").map(Number));
  check(people);
}
