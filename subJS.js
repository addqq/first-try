const initSet = [4, 6, 3, 64, 34, 2, 18]

/*returns the the subsctruction from max value in the set with 
every other array members */
function calcSubArr() {
    let max = Math.max(...initSet);
    return alert(initSet.filter(el => el !== max).reduce((total, cur) => 
                                                    total - cur, max));
}