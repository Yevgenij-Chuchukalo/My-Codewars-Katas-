let str ="WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB";

function songDecoder(song){
  return song.replace(/(WUB)+/ig, " ").trim();
}

console.log(songDecoder(str));
//Without them, (/WUB+/), the plus would only be used on the B, and it would match "The string WU followed by one or more B's".