/**
 *
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 *
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...
//1.建立入口函数
$(function () {
  // console.log('我要开始工作了')
  //获取撒输入框的INPUT
function keyCode() {
    $("#title").on("input", function (e) {
    const list = [];

    const value = $(this).val().trim();
    list.push(value);
    console.log(list);
    window.localStorage.setItem("inpValue", JSON.stringify(value));
    console.log(value);
    });
}
keyCode();
  //2.按下回车，把数据添加到本地存储里面
$("#title").bind("keypress", function (e) {
    if (e.keyCode == "13") {
    e.preventDefault();
      //此时，我们需要说明表单为空的情况
      // alert('我要进行数据的提交了')
      //3.从本地存储里面获取输入的值，获取数据,进行页面的渲染
    function bindHtml() {
        // const value=window.localStorage.inpValue
        let value = window.localStorage.getItem("inpValue");

        console.log(value);
        let str = "";
        str += `
                    <li>
                    <input type="checkbox" />
                    <p onclick="edit(1)">${value}</p>
                    <a href="javascript:remove(1)">-</a>
                    </li>
                    `;
        // console.log(str)
        $("#todolist").append(str);
    }
    bindHtml();
    }
    //4.计算现在正在进行，列表中有多少条数据
    count_now()
    function count_now(){
    const lis=document.querySelectorAll('.demo-box li')
    // console.log(lis)
    const count=lis.length
    // console.log(count)
    $('#todocount').html(count)
    }
    //4.2计算现在已完成，列表中有多少条数据(存在的问题，数据中数量永远是2)
    count_end()
    function count_end(){
        const lis=document.querySelectorAll('#donelist li')
        const count=lis.length
        $('#donecount').html(count)
        // console.log(count)
        // console.log(lis)
    }





});
    //5.1把数据进行清除
    //运用事件委托进行处理，实现删除功能
    $('.demo-box').on('click','a',function(){
        // console.log('我要进行删除功能了')
        $(this).parent().remove()
        count_now()
    })
    //重新计数
    count_now()
    function count_now(){
    const lis=document.querySelectorAll('.demo-box li')
    // console.log(lis)
    const count=lis.length
    // console.log(count)
    $('#todocount').html(count)
    }
    //5.2删除下面的数据
    //运用事件委托进行处理，实现删除功能
    $('#donelist').on('click','a',function(){
        console.log('我要进行删除功能了')
        $(this).parent().remove()
    })
    //重新计数
    count_end()
    function count_end(){
        const lis=document.querySelectorAll('#donelist li')
        const count=lis.length
        $('#donecount').html(count)
        console.log(count)
        console.log(lis)
    }
    //6.现在需要实现的功能是点击输入框然后把数据渲染到下面的列表
    $('.demo-box').on('click','input',function(){
        // console.log('我要提交到完成了')
        //这里把和p标签里面的值获取出来
        const done = $(this).nextAll('p').text()
        const check = $(this).prop('checked')
        // if (!check) {
        //         $(this).parent().remove()
        //         finished()
        // }
        bindEnd()

    })
    //获取到点击事件以后再次进行渲染(这里需要再次获取cook里面的value)
    function bindEnd(){
        let str =`
        <li>
        <input type="checkbox" checked="checked" />
        <p onclick="edit(4)">喝酒</p>
        <a href="javascript:remove(4)">-</a>
    </li>
    <li>
        <input type="checkbox" checked="checked" />
        <p onclick="edit(5)">蹦迪</p>
        <a href="javascript:remove(5)">-</a>
    </li>

        `
        str +=`
        <li>
        <input type="checkbox" checked="checked" />
        <p onclick="edit(5)">吃饭</p>
        <a href="javascript:remove(5)">-</a>
        </li>

        ` 
        console.log(str)
        $('#donelist').html(str)

    }
    






});
