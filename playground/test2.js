const getTicksOfBattle = (mobs, party) => {
  switch (true) {
    case party === 0: {
      return 0;
    }
    case party === 1: {
      return mobs.reduce((acc, current) => acc + current);
    }
    case party > 1: {
      const mobsPull = mobs.slice();
      let ticks = 0;
      let proccedMobs = mobsPull.splice(0, party);

      const proccesMobs = function proccesMobsRecursive(proccedMobs) {
        for (let i = 0; i < proccedMobs.length; i++) {
          proccedMobs[i] = proccedMobs[i] - 1;
          if (proccedMobs[i] === 0) {
            proccedMobs.splice(i, 1);
            proccedMobs.push(...mobsPull.splice(0, 1));
            if (!proccedMobs.length) return;
          }
        }
        ticks++;
        proccesMobsRecursive(proccedMobs);
      };
      proccesMobs(proccedMobs);

      return ticks;
    }
  }
};

console.log(getTicksOfBattle([4, 5], 1)); // 9
console.log(getTicksOfBattle([5, 7, 3, 4], 2)); // 11
console.log(getTicksOfBattle([8, 7, 3, 4], 3)); // 8
