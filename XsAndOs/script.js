let step = 0;
let ox = new Array(9);
window.onload = () => {
    document.getElementById("parent").onclick = (event) => {
        if (event.target.className == 'field' && !event.target.innerHTML) {
            step % 2 == 0 ? event.target.innerHTML = 'O' :  event.target.innerHTML = 'X';
            step++;
            let el = event.target.innerHTML;
            ox[event.target.id] = el;
            if (victorycondition(ox, el)) {
                alert(el == 'X' ? 'Крестики победили!' : 'Нолики победили!');
            } else if (step == 9 && !victorycondition(ox, el)) {
                alert('Ничья!');
            }
        }
    }
}

let victorycondition = (arr, k) => {
    console.log(arr);
    if (ox[1] == k && ox[2] == k && ox[3] == k)
        return true;
    if (ox[4] == k && ox[5] == k && ox[6] == k)
        return true;
    if (ox[7] == k && ox[8] == k && ox[9] == k)
        return true;
    if (ox[1] == k && ox[4] == k && ox[7] == k)
        return true;
    if (ox[2] == k && ox[5] == k && ox[8] == k)
        return true;
    if (ox[3] == k && ox[6] == k && ox[9] == k)
        return true;
    if (ox[1] == k && ox[5] == k && ox[9] == k)
        return true;
    if (ox[3] == k && ox[5] == k && ox[7] == k)
        return true;
    return false;
}