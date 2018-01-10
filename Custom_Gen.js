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
    var code=num_1+dropdown_select+"="+num_2+"\n";
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
    var code="ceil("+num+")";
    return [code,Blockly.Python.ORDER_NONE];
}

Blockly.Python['max']=function(block)
{
    Blockly.Python.definitions_['m']="import math";
    var num=Blockly.Python.valueToCode(block,'num',Blockly.Python.ORDER_ATOMIC);
    var num2=Blockly.Python.valueToCode(block,'num2',Blockly.Python.ORDER_ATOMIC);
    var code="max("+num+","+num2+")";
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
    // var list=Blockly.Python.valueToCode(block,'list',Blockly.Python.ORDER_NONE);
    // var iter=Blockly.Python.valueToCode(block,'iter',Blockly.Python.ORDER_NONE);
    // var stat=Blockly.Python.statementToCode(block,'to_do');
    // var code="for "+ iter+" in "+list+":\n"+stat+"\n";
    // return code;
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
    var code="find_prime_list("+limit+")\n";
    return [code,Blockly.Python.ORDER_NONE];
}

Blockly.Pthon['find_fract_list']=function(block)
{
    var num=Blockly.Python.valueToCode(block,'num',Blockly.Python.ORDER_ATOMIC);
    var code ="find_fract_list("+num+")\n";
    return [code,Blockly.Pthon.ORDER_NONE];
}