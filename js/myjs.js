// 信件提示訊息
function Send() {
    if(confirm("確認送出？")){
            alert("感謝您的回覆！");
            $(function() {
                $("input").val("");
                $("textarea").val("");
            });
        }else{
            alert("已取消送出。") ;
        }
    }
