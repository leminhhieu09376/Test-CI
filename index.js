/*................................A.................................. */
function allLongestStrings(inputArray) {
    let x = 0;
    let result = [];
    for (index of inputArray) {
        if (index.length > x) {
            x = index.length
        }
    }
    for (index of inputArray) {
        if (index.length == x) {
            result.push(index)
        }
    }
    console.log(result)
}
// allLongestStrings(["BINH", "HUNG", "PHUOC", "CAO", "KHANH"])

function alternatingSums(a) {
    let ans = [];
    let x = 0;
    let y = 0;
    for (let i = 0; i < a.length; i = i + 2) {
        x = x + a[i]
    }
    for (let i = 1; i < a.length; i = i + 2) {
        y = y + a[i]
    }
    ans.push(x, y)
    console.log(ans)
}
alternatingSums([60, 40, 55, 75, 64])
/*................................B.................................. */
let colorInput = document.querySelector("#color")
let colorId = document.querySelector("#colorId")

function changeColor() {
    let number = (Math.random() * 0xffffff * 1000000).toString(16).slice(0, 6);
    let randomColor = "#" + number;
    document.body.style.backgroundColor = randomColor;

    colorId.value = randomColor;


}
function copyFun() {

    colorId.select();
    navigator.clipboard.writeText(colorId.value);
    alert("Copied: " + colorId.value);
}

colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    colorId.value = color;
    document.body.style.backgroundColor = color;
})
