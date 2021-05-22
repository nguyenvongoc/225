function setOutput(number) 
{
    document.getElementById('output').value += number;
}

function cal() 
{
    let input =  document.getElementById('output').value;
    result = eval(input);
    if((result= eval(input))==false)
    document.getElementById('output').value = "NaN";
    document.getElementById('output').value = result;
}

function deleteall()
{
    let input =  document.getElementById('output').value;
    document.getElementById('output').value = null;
}

function deleteone()
{
    let input =  document.getElementById('output').value;
    result = input.substring(0,input.length -1);
    document.getElementById('output').value = result;
}