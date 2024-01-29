const getdata = async function () {
    const res = await fetch(`https://opentdb.com/api.php?amount=40&category=21&difficulty=easy&type=multiple`);
    const data = await res.json();
    console.log(data);
};
getdata();