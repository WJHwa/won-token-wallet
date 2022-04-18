const db = require("../db");
const crypto = require("crypto");
const auth = require("../js/middlewares");
const jwt = require("jsonwebtoken");
const salt = require("../js/secret");

let refreshTokens = [];

const ctrl = {
  //문의등록//
  askPush: (req, res) => {
    let token = req.body.token;
    let title = req.body.title;
    let content = req.body.content;

    db.query(
      "SELECT * FROM user WHERE access_token = ?",
      token,
      (err, result) => {
        if (!err) {
          if (result.length === 1) {
            let id = result[0].id;
            db.query(
              "INSERT INTO question (name,title,content) VALUES (?,?,?)",
              [result[0].name, title, content],
              (err, result) => {
                if (result.serverStatus === 2) {
                  res.status(200).json(id);
                } else if (err) {
                  console.log(err);
                }
              }
            );
          }
        } else {
          console.log(err);
        }
      }
    );
  },
  //지갑주소//
  getAddress: async (req, res) => {
    let authHeader = req.headers.authorization;
    let token = authHeader.split(" ")[1];

    db.query(
      "SELECT * FROM user WHERE access_token = ?;",
      token,
      (err, result) => {
        if (!err) {
          if (result) {
            res.status(200).json({
              id: result[0].id,
              Wn: result[0].Wn,
              name: result[0].name,
            });
          } else {
            res.status(400).json("db에 데이터가 없습니다.");
          }
        } else {
          console.log(err);
        }
      }
    );
  },
  //답변가져오기//
  getAnswer: (req, res) => {
    let authHeader = req.headers.authorization;
    let token = authHeader.split(" ")[1];
    let id = req.query.id;

    db.query(
      "SELECT * FROM user WHERE access_token=?",
      token,
      (err, result) => {
        if (!err) {
          if (result) {
            let name = result[0].name;

            db.query(
              "SELECT * FROM question WHERE name = ? AND id=?",
              [name, id],
              (err, result) => {
                if (result) {
                  res.status(200).json(result);
                } else {
                  console.log(err);
                }
              }
            );
          }
        } else {
          console.log(err);
        }
      }
    );
  },
  //receipt 가져오기//
  getHistory: (req, res) => {
    let authHeader = req.headers.authorization;
    let token = authHeader.split(" ")[1];

    db.query(
      "SELECT * FROM user WHERE access_token = ?;",
      token,
      (err, result) => {
        if (!err) {
          if (result) {
            let name = result[0].name;
            let id = result[0].id;
            db.query(
              "SELECT * FROM receipt WHERE name = ?",
              name,
              (err, result) => {
                if (result) {
                  res.status(200).json({ result: result, id: id });
                } else {
                  console.log(err);
                }
              }
            );
          } else {
            res.status(400).json("db에 데이터가 없습니다.");
          }
        } else {
          console.log(err);
        }
      }
    );
  },

  getMaster: (req, res) => {
    let authHeader = req.headers.authorization;
    let token = authHeader.split(" ")[1];

    db.query(
      "SELECT * FROM user WHERE access_token = ?",
      token,
      (err, result) => {
        if (result[0].name === "마스터") {
          db.query("SELECT * FROM question", (err, result) => {
            res.status(200).json(result);
          });
        } else {
          console.log(err);
        }
      }
    );
  },

  getMasterAn: (req, res) => {
    const id = req.query.id;

    db.query("SELECT * FROM question WHERE id = ?", id, (err, result) => {
      if (!err) {
        res.status(200).json(result);
      } else {
        res.send(err);
      }
    });
  },

  getMasterQnA: (req, res) => {
    const value = req.body.value;
    const id = req.body.id;
    const an = "답변완료";

    db.query(
      "UPDATE question SET answer = ?,answericon = ? WHERE id = ?",
      [value, an, id],
      (err, result) => {
        if (!err) {
          res.status(200).json(result);
        } else {
          res.send(err);
        }
      }
    );
  },

  getPassword: (req, res) => {
    const name = req.body.name;
    db.query("SELECT * FROM user WHERE name = ?;", name, (err, result) => {
      if (!err) {
        if (result.length === 1 || result.length > 1) {
          res.json(result[0].id);
        } else {
          res.json(false);
        }
      } else {
        res.json({ message: "err" });
      }
    });
  },
  //문의 가져오기//
  getQuestion: (req, res) => {
    let authHeader = req.headers.authorization;
    let token = authHeader.split(" ")[1];

    db.query(
      "SELECT * FROM user WHERE access_token = ?;",
      token,
      (err, result) => {
        if (!err) {
          if (result) {
            let name = result[0].name;
            let id = result[0].id;
            db.query(
              "SELECT * FROM question WHERE name = ?;",
              name,
              (err, result) => {
                if (result) {
                  res.status(200).json({ id: id, data: result });
                } else {
                  console.log(err);
                }
              }
            );
          } else {
            res.status(400).json("db에 데이터가 없습니다.");
          }
        } else {
          console.log(err);
        }
      }
    );
  },
  //Send 보내기 //
  getSend: (req, res) => {
    let hash = req.body.hash;
    let gas = req.body.gas;
    let to = req.body.to;
    let name = req.body.name;

    db.query(
      "INSERT INTO receipt(Hash,gas,Hash_to,name) VALUES(?,?,?,?);",
      [hash, gas, to, name],
      (err, result) => {
        if (result.serverStatus === 2) {
          res.status(200);
        } else {
          console.log(err);
        }
      }
    );
  },
  // 회원탈퇴 //
  iddelete: (req, res) => {
    let id = req.params.id;

    db.query("SELECT * FROM user WHERE id = ?", id, (err, result) => {
      if (!err) {
        let token = result[0].access_token;

        db.query("DELETE FROM user WHERE id = ?", id, (err, result) => {
          if (!err) {
            if (result.affectedRows === 1) {
              res.json({ token: token });
            } else {
              res.send(false);
            }
          } else {
            console.log(err);
          }
        });
      } else {
        console.log(err);
      }
    });
  },

  login: (req, res) => {
    const pw = req.body.pw;
    const name = req.body.name;
    db.query("SELECT * FROM user WHERE name = ?;", [name], (err, results) => {
      if (!err) {
        if (results.length === 1 || results.length > 1) {
          const hashedPw = crypto
            .pbkdf2Sync(pw, results[0].salt, 10000, 64, "sha256")
            .toString("hex");
          const PW = results[0].pw;
          if (hashedPw === PW) {
            let accessToken = auth.generateAccessToken(results[0].id);
            let refreshToken = auth.generateRefreshToken(results[0].id);
            db.query(
              "UPDATE user SET access_token =?, refresh_token = ? WHERE name = ?",
              [accessToken, refreshToken, name],
              (err, results) => {
                if (!err) {
                  refreshTokens.push(refreshToken);
                  res.json({ accessToken, refreshToken });
                } else {
                  console.log(err);
                }
              }
            );
          } else {
            res.send(false);
          }
        } else {
          res.send(false);
        }
      } else {
        console.log(err);
      }
    });
  },

  logout: (req, res) => {
    const refreshToken = req.body.refreshToken;
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    res.status(200).json("로그아웃 하셨습니다.");
  },
  // 인포들어갈때 체크
  myinfochack: (req, res) => {
    let pw = req.body.pw;
    let token = req.body.token;

    db.query(
      "SELECT * FROM user WHERE  access_token = ?",
      token,
      (err, result) => {
        if (!err) {
          const hashedPw = crypto
            .pbkdf2Sync(pw, result[0].salt, 10000, 64, "sha256")
            .toString("hex");
          if (result[0].pw === hashedPw) {
            res.status(200).json(result[0].id);
          } else {
            res.json(false);
          }
        } else {
          console.log(err);
        }
      }
    );
  },
  // 내정보 수정
  myinfoput: (req, res) => {
    let name = req.body.name;
    let Wn = req.body.Wn;
    let nick = req.body.nick;
    let email = req.body.email;
    let pw = req.body.pw;
    let token = req.body.token;

    db.query(
      "SELECT * FROM user WHERE access_token = ?;",
      [token],
      (err, results) => {
        if (!err) {
          if (results.length === 1 || results.length > 1) {
            const hashedPw = crypto
              .pbkdf2Sync(pw, results[0].salt, 10000, 64, "sha256")
              .toString("hex");
            const PW = results[0].pw;
            if (hashedPw === PW) {
              db.query(
                "UPDATE user SET name =?, Wn = ?,nick=?,email=? WHERE access_token= ?",
                [name, Wn, nick, email, token],
                (err, results) => {
                  if (!err) {
                    res.send(true);
                  } else {
                    console.log(err);
                  }
                }
              );
            } else {
              res.send(false);
            }
          } else {
            res.send(false);
          }
        } else {
          console.log(err);
        }
      }
    );
  },
  // 나의 정보 가져오기
  myinfos: (req, res) => {
    let authHeader = req.headers.authorization;
    let token = authHeader.split(" ")[1];

    db.query(
      "SELECT * FROM user WHERE access_token = ?;",
      token,
      (err, result) => {
        if (!err) {
          if (result) {
            res.json({
              nick: result[0].nick,
              Wn: result[0].Wn,
              email: result[0].email,
              name: result[0].name,
              id: result[0].id,
            });
          } else {
            res.status(400).send("db에 데이터가 없습니다.");
          }
        } else {
          console.log(err);
        }
      }
    );
  },
  // 비밀번호 변경 //
  pwChange: (req, res) => {
    let pw = req.body.pw;
    let id = req.body.id;

    db.query("SELECT * FROM user WHERE id = ?", id, (err, result) => {
      if (!err) {
        if (result) {
          const hashedPw = crypto
            .pbkdf2Sync(pw, result[0].salt, 10000, 64, "sha256")
            .toString("hex");
          db.query(
            "UPDATE user SET pw = ? WHERE id = ?",
            [hashedPw, result[0].id],
            (err, result) => {
              if (result.changedRows === 1) {
                res.json(true);
              } else if (result) {
                res.json(err);
              } else {
                res.json(false);
              }
            }
          );
        }
      }
    });
  },
  refresh: (req, res) => {
    let refreshToken = req.body.refreshToken;

    if (!refreshToken)
      return res.status(401).json("당신은 인증되지 않았습니다!");

    if (!refreshTokens.includes(refreshToken)) {
      return res.status(403).json("refreshToken이 유효하지 않습니다.");
    }

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (error, user) => {
        if (error) return console.log(error);
        refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

        const newAccessToken = auth.generateAccessToken(user.id);
        const newRefreshToken = auth.generateRefreshToken(user.id);
        refreshTokens.push(newRefreshToken);

        res
          .status(200)
          .json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
        console.log("성공");
      }
    );
  },
  // 회원가입 //
  register: (req, res) => {
    const name = req.body.name;
    const pw = req.body.pw;
    const Wn = req.body.Wn;
    const nick = req.body.nick;
    const email = req.body.email;
    const hashedPw = crypto
      .pbkdf2Sync(pw, salt, 10000, 64, "sha256")
      .toString("hex");

    db.query("SELECT * FROM user WHERE name=?", name, (err, result) => {
      if (result.length === 0) {
        db.query(
          "INSERT INTO user.user(name,pw,Wn,salt,nick,email) VALUES(?,?,?,?,?,?);",
          [name, hashedPw, Wn, salt, nick, email],
          (err, results) => {
            if (!err) {
              res.send(results);
            } else {
              console.log(err);
            }
          }
        );
      } else {
        res.json(false);
      }
    });
  },
};

module.exports = ctrl;
