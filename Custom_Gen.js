Blockly.Python['append_list']=function(block)
{
    var val=Blockly.Python.valueToCode(block,'to_add',Blockly.Python.ORDER_NONE);
    var list=Blockly.Python.valueToCode(block,'list');
    var code=list+".append("+val+")\n";
    return code;
};

Blockly.Python['break']=function(block)
{
    var code="break\n";
    return code;
}

Blockly.Python['short_math']=function(block)
{
    var num_1=Blockly.Python.valueToCode(block,'a',Blockly.Python.ORDER_ATOMIC);
    var dropdown_select = block.getFieldValue('select');
    var num_2=Blockly.Python.valueToCode(block,'b',Blockly.Python.ORDER_ATOMIC);
    var code=num_1+dropdown_select+"= "+num_2+"\n";
    return code;
}

Blockly.Python['for_list']=function(block)
{
    var list=Blockly.Python.valueToCode(block,'list',Blockly.Python.ORDER_NONE);
    var iter=Blockly.Python.valueToCode(block,'iter',Blockly.Python.ORDER_NONE);
    var stat=Blockly.Python.statementToCode(block,'to_do');
    var code="for "+ iter+" in "+list+":\n"+stat+"\n";
    return code;
}

Blockly.Python['true']=function(block)
{
    var code="True";
    return [code,Blockly.Python.ORDER_NONE];
}

Blockly.Python['false']=function(block)
{
    var code="False";
    return [code,Blockly.Python.ORDER_NONE];
}

Blockly.Python['and_or']=function(block)
{
    var arg1=Blockly.Python.valueToCode(block,'a',Blockly.Python.ORDER_NONE);
    var arg2=Blockly.Python.valueToCode(block,'b',Blockly.Python.ORDER_NONE);
    var dropdown_select=block.getFieldValue('select');
    var code=arg1+" "+dropdown_select+" "+arg2;
    return [code,Blockly.Python.ORDER_NONE];
}

Blockly.Python['ceil']=function(block)
{
    Blockly.Python.definitions_['m']="import math";
    var num=Blockly.Python.valueToCode(block,'num',Blockly.Python.ORDER_ATOMIC);
    var code="ceil"+num+"";
    return [code,Blockly.Python.ORDER_NONE];
}

Blockly.Python['max']=function(block)
{
    Blockly.Python.definitions_['m']="import math";
    var num=Blockly.Python.valueToCode(block,'num',Blockly.Python.ORDER_ATOMIC);
    var code="max("+num+")";
    return [code,Blockly.Python.ORDER_NONE];
}

Blockly.Python['list_with_element']=function(block)
{
    var element=Blockly.Python.valueToCode(block,'element',Blockly.Python.ORDER_ATOMIC);
    var code="["+element+"]";
    return [code,Blockly.Python.ORDER_COLLECTION];
}

Blockly.Python['simple_for']=function(block)
{
    var iter =Blockly.Python.valueToCode(block,'varr',Blockly.Python.ORDER_NONE);
    var r1=Blockly.Python.valueToCode(block,'r1',Blockly.Python.ORDER_NONE);
    var r2=Blockly.Python.valueToCode(block,'r2',Blockly.Python.ORDER_NONE);
    var state=Blockly.Python.statementToCode(block,"to_do");
    var code="for "+iter+" in range("+r1+","+r2+") :\n"+state+"\n";
    return code;
}

Blockly.Python['prime_list']=function(block)
{
    var limit=Blockly.Python.valueToCode(block,'limit',Blockly.Python.ORDER_ATOMIC);
    var code="find_prime_list("+limit+")";
    return [code,Blockly.Python.ORDER_NONE];
}

Blockly.Python['find_fract_list']=function(block)
{
    var num=Blockly.Python.valueToCode(block,'num',Blockly.Python.ORDER_ATOMIC);
    var code ="find_fract_list"+num+"\n";
    return [code,Blockly.Python.ORDER_NONE];
}

Blockly.Python['universal_print']=function(block)
{
    var input=[];
    var code="";
    // if(typeof input !="number"){
    // code="print("+input+")\n";
    // }else{
    //     code="print"+input+"\n";
    // }
    input.push(Blockly.Python.valueToCode(block,'inp',Blockly.Python.ORDER_ATOMIC));
    if(block.inputList.length>2){
        for(var i=1;i<block.inputList.length-1;i++){
            input.push(Blockly.Python.valueToCode(block,'inp'+i,Blockly.Python.ORDER_ATOMIC));
        }
    }
    code=code+"print(";
    if(input.length==1){
        code=code+input[0]+")\n";
    }else{
        for(var i=0;i<input.length;i++){
            if(i!=input.length-1){
                code=code+input[i]+",";
            }
            else{
                code=code+input[i];
            }
        }
        code=code+")\n";
    }
    return code;
}

Blockly.Python['to_string']=function(block)
{
    var input=Blockly.Python.valueToCode(block,'input',Blockly.Python.ORDER_ATOMIC);
    var code="str("+input+")\n";
    return [code,Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['slice_list']=function(block)
{
    var list=Blockly.Python.valueToCode(block,'list',Blockly.Python.ORDER_COLLECTION);
    var range=Blockly.Python.valueToCode(block,'range',Blockly.Python.ORDER_NONE);
    var code=list+" = "+list+range+"\n";
    return code;
}

Blockly.Python['slice_range']=function(block)
{
    var r1=Blockly.Python.valueToCode(block,'r1',Blockly.Python.ORDER_ATOMIC);
    var r2=Blockly.Python.valueToCode(block,'r2',Blockly.Python.ORDER_ATOMIC);
    var r1_processed=r1.replace(/\'/gi,'');
    var r1_no_paren=r1_processed.replace(/[()]/gi,'');
    var r2_processed=r2.replace(/\'/gi,'');
    var r2_no_paren=r2_processed.replace(/[()]/gi,'');
    var code="";
    if(r1.includes("[")){
        code="[::"+r2+"]";
    }
    if(r2.includes('[')){
        code="["+r1+"::]";
    }
    if(r1.includes("[")&&r2.includes("[")){
        code="[:"+":"+":]";
    }
    if(!r1.includes("[")&&!r2.includes("[")){
        code="["+r1+":"+r2+"]";
    }
    return [code,Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['slice_list_output']=function(block)
{
    var list=Blockly.Python.valueToCode(block,'list',Blockly.Python.ORDER_COLLECTION);
    var range=Blockly.Python.valueToCode(block,'range',Blockly.Python.ORDER_NONE);

    var code=list+range+"\n";
    return [code,Blockly.Python.ORDER_COLLECTION];
}

Blockly.Python['find_palindrome']=function(block)
{
    var digit=Blockly.Python.valueToCode(block,'digit',Blockly.Python.ORDER_ATOMIC);
    var code="find_palindrome("+digit+")";
    return [code,Blockly.Python.ORDER_COLLECTION];
}

Blockly.Python['gcd']=function(block)
{
    var num1=Blockly.Python.valueToCode(block,'num1',Blockly.Python.ORDER_ATOMIC);
    var num2=Blockly.Python.valueToCode(block,'num2',Blockly.Python.ORDER_ATOMIC);
    var code="gcd("+num1+","+num2+")";
    return [code,Blockly.Python.ORDER_ATOMIC];

}

Blockly.Python['lcm_part']=function(block)
{
    var num1=Blockly.Python.valueToCode(block,'num1',Blockly.Python.ORDER_ATOMIC);
    var num2=Blockly.Python.valueToCode(block,'num2',Blockly.Python.ORDER_ATOMIC);
    var code="find_partial_lcm("+num1+","+num2+")";
    return [code,Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['abs']=function(block)
{
    var num=Blockly.Python.valueToCode(block,'num',Blockly.Python.ORDER_ATOMIC);
    var code="";
    if(typeof num=="number"){
        code="abs"+num+"\n";
    }
    else
    {
        code="abs("+num+")\n";
    }

    return [code,Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['lcm_total']=function(block)
{
    var limit=Blockly.Python.valueToCode(block,'limit',Blockly.Python.ORDER_ATOMIC);
    var code="find_total_lcm("+limit+")";
    return [code,Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['sum_of_square']=function(block){
    var num=Blockly.Python.valueToCode(block,'num',Blockly.Python.ORDER_ATOMIC);
    var code="find_sum_of_square("+num+")";
    return [code,Blockly.Python.ORDER_NONE];
}

Blockly.Python['square_of_sum']=function(block){
    var num=Blockly.Python.valueToCode(block,'num',Blockly.Python.ORDER_ATOMIC);
    var code="find_square_of_sum("+num+")";
    return[code,Blockly.Python.ORDER_NONE];
}

Blockly.Python['bool_dropdown']=function(block){
    var val=block.getFieldValue('property');
    var code="";
    if(val=='true'){
        code="True";
    }else{
        code="False";
    }
    return [code,Blockly.Python.ORDER_NONE];
}

Blockly.Python['read_file']=function(block){
    var fileName=Blockly.Python.valueToCode(block,'file_name',Blockly.Python.ORDER_ATOMIC);
    var mode=block.getFieldValue('mode');
    var code="f=open("+fileName+" , \""+mode+"\")\n";
    return code;
}

Blockly.Python['process_file']=function(block){
    var code="process_code()\n";
    return code;
}

Blockly.Python['calc_part']=function(block){
    var num=Blockly.Python.valueToCode(block,'num',Blockly.Python.ORDER_ATOMIC);
    var code="calc("+num+")";
    return [code,Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['find_max_mult']=function(block){
    var input=Blockly.Python.valueToCode(block,'input',Blockly.Python.ORDER_COLLECTION);
    var code="find_max_mult("+input+")";
    return [code, Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['read_line']=function(block){
    var code="f.readline()";
    return [code,Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['not']=function(block){
    var input=Blockly.Python.valueToCode(block,'input',Blockly.Python.ORDER_NONE);
    var code="not "+input;
    return [code,Blockly.Python.ORDER_NONE];
}

Blockly.Python['close_filestream']=function(block){
    var code="f.close()";
    return code;
}

Blockly.Python['clear_list']=function(block){
    var list=Blockly.Python.valueToCode(block,'list',Blockly.Python.ORDER_COLLECTION);
    var code=list+".clear()\n";
    return code;
}

Blockly.Python['to_int']=function(block){
    var input=Blockly.Python.valueToCode(block,'input',Blockly.Python.ORDER_NONE);
    var code="int("+input+")";
    return [code,Blockly.Python.ORDER_ATOMIC];
}

Blockly.Python['find_pytha']=function(block){
    var code="find_pytha()";
    return [code,Blockly.Python.ORDER_NONE];
}