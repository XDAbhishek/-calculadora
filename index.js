var currNum ="";
var prevNum = "0";
var operator = "";
var count = 0;
var ans = "" ;

function func(a)
{
  currNum += a; 
  document.getElementById("display").value = currNum;
}

function oper(ch)
{
  document.getElementById("display").value = ch;
  if(count==0)
  {
  operator = ch;
  prevNum = currNum;
  currNum="";
  count++;
  }
  else
      operator = ch;
}

function calculate(a , ch , b)
{
 count--;
 if(ch=='+')
   return (parseInt(a)+parseInt(b)).toString();
 if(ch=='-')
   return (parseInt(a)-parseInt(b)).toString();
  if(ch=='x')
   return (parseInt(a)*parseInt(b)).toString();
  if(ch=='%')
    return (parseInt(a)/parseInt(b)).toString();
}

function equal()
{
  console.log("prev is "+prevNum+" curr is "+currNum);
  ans = calculate(prevNum,operator,currNum);
  prevNum = "";
  currNum =ans;
  operator ="";
  //console.log(ans+" Prev num becomes "+prevNum);
  document.getElementById("display").value = ans;
}

function clearAll()
{
  currNum = "";
  prevNum = "";
  operator = "."
  document.getElementById("display").value = "0";
}