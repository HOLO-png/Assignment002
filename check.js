document.addEventListener(
  'DOMContentLoaded',
  () => {
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const inputForm = $$('input');
    const btn = $('button');
    const print_data = $('.print_data');
    var valueBox1 = 0;
    var valueBox2 = 0;
    var valueBox3 = 0;
    var valueBox4 = 0;
    var arrValueBox1 = [];
    var arrValueBox2 = [];
    var arrValueBox3 = [];
    var arrValueBox4 = [];

    inputForm[0].onchange = function (e) {
      valueBox1 = e.target.value;
    };

    inputForm[1].onchange = function (e) {
      valueBox2 = e.target.value;
    };

    inputForm[2].onchange = function (e) {
      valueBox3 = e.target.value;
    };

    inputForm[3].onchange = function (e) {
      valueBox4 = e.target.value;
    };

    btn.onclick = function () {
      var sogoc;
      var sogocconlai;
      var lai;
      var gocLai;
      sogoc = valueBox1 / valueBox2;
      arrValueBox4.push(Math.ceil(sogoc));
      for (let i = 0; i < valueBox2; i++) {
        sogocconlai = valueBox1 - sogoc * (i + 1);
        lai = ((valueBox1 - sogoc * i) * valueBox3) / valueBox2 / 100;
        gocLai = sogoc + lai;
        arrValueBox3.push(Math.ceil(gocLai));
        arrValueBox2.push(Math.ceil(lai));
        arrValueBox1.push(Math.ceil(sogocconlai));
        inKetQua(arrValueBox1, arrValueBox2, arrValueBox3, arrValueBox4);
      }
      function inKetQua(
        arrValueBox1,
        arrValueBox2,
        arrValueBox3,
        arrValueBox4
      ) {
        for (let i = 0; i < valueBox2; i++) {
          const data = `
                <tr>
                  ${arrValueBox1.map(
                    (val) => `<td>${val.toLocaleString()}</td>`
                  )}
                  ${arrValueBox2.map(
                    (val) => `<td>${val.toLocaleString()}</td>`
                  )}
                  ${arrValueBox3.map(
                    (val) => `<td>${val.toLocaleString()}</td>`
                  )}
                  ${arrValueBox4.map(
                    (val) => `<td>${val.toLocaleString()}</td>`
                  )}
                </tr>`;
          print_data.innerHTML = data;
          console.log(data);
        }
      }
    };
  },
  false
);
