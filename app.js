
let s="abbbbbbbccccccccccffffffg"
let string1="";
for( i=0;i<s.length;i++){
if(s.charAt(i)!=s.charAt(i+1))
    {
    string1=string1+s.charAt(i);
    }
    else{
       while(s.charAt(i)==s.charAt(i+1))
       {
        i++;
       }
    }
}
if(string1.length==0)
{
    console.log("vanished")
}
else{
console.log(string1)
}