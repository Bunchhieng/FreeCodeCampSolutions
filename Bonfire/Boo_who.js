/**
 * Created by Bunchhieng on 1/14/2016.
 */
function boo(bool) {
    return bool === true || bool === false ? true : false;
}

function boo2(bool) {
    return typeof boo === Boolean;
}

console.log(boo(false));