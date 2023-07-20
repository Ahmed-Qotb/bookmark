// global var

var userBookmark;
var userUrl;
userBookmark = document.getElementById('U_BMARK');
userUrl = document.getElementById('U_URL');

var siteData;
var userArr;


if (localStorage.getItem('user_data') === null) {
  userArr = [];
} else {
  userArr = JSON.parse(localStorage.getItem('user_data'));
  display();
}


// create book mark func start
function createBookMark() {
  siteData = {
    siteName: userBookmark.value,
    siteUrl: userUrl.value,
  }

  userArr.push(siteData)
  localStorage.setItem('user_data', JSON.stringify(userArr))
  clear()
  display()
  console.log(userArr)
}
// create book mark func end


// clear function start
function clear() {
  userBookmark.value = '';
  userUrl.value = '';
  display()
}
// clear function end

// display function start
function display() {
  var trs = ``;
  if (userArr.length != 0) {
    for (let i = 0; i < userArr.length; i++) {
      trs += `
      <tr>
      <th scope="row">${i + 1}</th>
      <td>${userArr[i].siteName}</td>
      <td><button class="btn btn-success">
              <a href="${userArr[i].siteUrl}" class="text-decoration-none text-white" target="_blank">
                  <i class="fa-solid fa-eye"></i> Visit
              </a>
          </button>
      </td>
      <td><button class="btn btn-danger" onclick="del(${i})" >
              <i class="fa-solid fa-trash-can"></i> Delete
          </button>
      </td>
      </tr>
      
      
      `
      document.getElementById('U_table').innerHTML = trs;
    }
  }
  else {
    trs = ``
    document.getElementById('U_table').innerHTML = trs;
  }
}
// display function end


// delete from array function start
function del(index) {
  userArr.splice(index, 1)
  localStorage.setItem('user_data',JSON.stringify(userArr))
  console.log(userArr)
  display()
}
// delete from array function end

