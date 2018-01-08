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