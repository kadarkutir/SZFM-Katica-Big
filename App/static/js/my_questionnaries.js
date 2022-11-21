// Answer on questionnare table creator
function get_answers_on_own_questionnare(link){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET",link,true)
    xmlHttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xmlHttp.onload = function(){
        rsp3 = JSON.parse(xmlHttp.response)
        create_table_for_answers(rsp3)
    }
    xmlHttp.send()
}

function makeCell_answers(value,title,user){
    cell = document.createElement('td')
    cell.appendChild(document.createTextNode(value))
    cell.addEventListener('click',function(){
        get_answers_for_questionnare("/get_answers_by_user_and_title_my_questionnare/"+title+"/"+user)
    })

    return cell
}

function makeRow_answers(tbody,values){
    r = document.createElement('tr')
    r.appendChild(makeCell_answers(values[1],values[0],values[1]))
    r.appendChild(makeCell_answers(values[2],values[0],values[1]))
    
    tbody.appendChild(r)
}


function create_table_for_answers(data3){
    if(data3.length == 0){
        mainframe = document.getElementById("mainframe")
        mainframe.innerHTML = ""
        base = document.createElement('div')
        base.classList.add("profile")
        show = document.createElement("p")
        show.innerHTML = "Noone answered your questionnare :("
        base.appendChild(show)
        mainframe.appendChild(base)

        back_button = document.createElement('button')
        back_button.classList.add('back_button')
        back_button.addEventListener('click', () => {
            my_questionnaries_main()
        })

        mainframe.appendChild(back_button)
    }else{
        mainframe = document.getElementById("mainframe")
        mainframe.innerHTML = ""
        h1 = document.createElement('h1')
        h1.innerHTML = data3[0][0];
        mainframe.appendChild(h1)

        answer_table = document.createElement('table')
        answer_table.classList.add('my_questions_answers_table')
        thead = document.createElement('thead')
        answer_tbody = document.createElement('tbody')

        tr = document.createElement('tr');
        th1 = document.createElement('th');
        th1.appendChild(document.createTextNode('Answered by'));
        tr.appendChild(th1)
        th2 = document.createElement('th');
        th2.appendChild(document.createTextNode('Answered at'));
        tr.appendChild(th2)
        thead.appendChild(tr)

        for(var i = 0;i < data3.length;i++){
            makeRow_answers(answer_tbody,data3[i])
        }

        back_button = document.createElement('button')
        back_button.classList.add('back_button')
        back_button.addEventListener('click', () => {
            my_questionnaries_main()
        })

        mainframe.appendChild(back_button)
        answer_table.appendChild(thead);
        answer_table.appendChild(answer_tbody);
        mainframe.appendChild(answer_table)
    }       
}

// Answer by user creator
function get_answers_for_questionnare(link){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET",link,true)
    xmlHttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xmlHttp.onload = function(){
        rsp2 = JSON.parse(xmlHttp.response)
        create_answers_by_user(rsp2)
    }
    xmlHttp.send()
}

function create_answers_by_user(data2){
    mainframe = document.getElementById("mainframe")
    mainframe.innerHTML = ""
    h1 = document.createElement('h1')
    h1.innerHTML = data2[0];
    mainframe.appendChild(h1)

    answer_p = document.createElement("p")
    answer_p.innerHTML = "Answered by: "+data2[1]
    answer_p.classList.add("my_q_answer_by")
    mainframe.appendChild(answer_p)
    

    ans_table = document.createElement('table')
    ans_table.classList.add('result_table_design')
    ans_tbody = document.createElement('tbody')

    for(let j=2;j<data2.length;j++){
        row_ans = document.createElement('tr')
        col_ans = document.createElement('td')
        col_ans.appendChild(document.createTextNode(data2[j]))
        row_ans.appendChild(col_ans)
        ans_tbody.appendChild(row_ans)
    }

    back_button = document.createElement('button')
    back_button.classList.add('back_button')
    back_button.addEventListener('click',() => {
        my_questionnaries_main()
    })
    

    ans_table.appendChild(ans_tbody)
    mainframe.appendChild(ans_table)
    mainframe.appendChild(back_button)
}

// My questionnare table creator
function get_my_questionnaries(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET","/get_own_questionnaries_by_user",true)
    xmlHttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xmlHttp.onload = function(){
        rsp = JSON.parse(xmlHttp.response)
        create_table_mine(rsp)
    }
    xmlHttp.send()
}