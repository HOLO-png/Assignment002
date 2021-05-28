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
    var arrValueInput = [];

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
      var ObjVal = {
        valueBox1: valueBox4,
        valueBox2: valueBox1.toLocaleString(),
        valueBox3: '',
        valueBox4: '',
        valueBox5: '',
      };
      arrValueInput.push(ObjVal);
      sogoc = valueBox1 / valueBox2;
      var tonglai = 0;
      var tonggoclai = 0;

      for (let i = 0; i < valueBox2; i++) {
        // var date = new Date(valueBox4);
        // day = date.getDate();
        // month = date.getMonth();
        // year = date.getFullYear();
        // console.log(day);
        // console.log(month);
        // console.log(year);

        // if (month < 0) {
        //   year = date.getFullYear();
        //   month = 12;
        // } else if (month > 12) {
        //   month = 1 + i;
        //   year = date.getFullYear();
        // }
        // valueBox4 = [year, month, day].join('-');
        sogocconlai = valueBox1 - sogoc * (i + 1);
        lai = ((valueBox1 - sogoc * i) * valueBox3) / valueBox2 / 100;
        gocLai = sogoc + lai;
        tonglai += lai;
        tonggoclai += gocLai;
        ObjVal = {
          valueBox1: valueBox4,
          valueBox2: sogocconlai,
          valueBox3: sogoc,
          valueBox4: lai,
          valueBox5: gocLai,
        };
        arrValueInput.push(ObjVal);
      }
      ObjVal = {
        valueBox1: 'Tổng:',
        valueBox2: '',
        valueBox3: valueBox1.toLocaleString(),
        valueBox4: tonglai,
        valueBox5: tonggoclai,
      };
      arrValueInput.push(ObjVal);
      inKetQua(arrValueInput);
    };
    function inKetQua(arr) {
      const data = arr.map((val) => {
        return `<tr>
                      <td>${val.valueBox1.toLocaleString()}</td>
                      <td>${val.valueBox2.toLocaleString()}</td>
                      <td>${val.valueBox3.toLocaleString()}</td>
                      <td>${val.valueBox4.toLocaleString()}</td>
                      <td>${val.valueBox5.toLocaleString()}</td>
                    </tr>`;
      });
      print_data.innerHTML = data;
    }
  },
  false
);
