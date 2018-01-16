Blockly.Python['if_mult_of_three']=function(block){

    var num=Blockly.Python.valueToCode(block,'num',Blockly.Python.ORDER_ATOMIC);
    var code=num+"%3==0";
    return [code,Blockly.Python.ORDER_NONE];
};
Blockly.Python['if_mult_of_five']=function(block){
    var num=Blockly.Python.valueToCode(block,'num',Blockly.Python.ORDER_ATOMIC);
    var code=num+"%5==0";
    return [code,Blockly.Python.ORDER_NONE];
}

Blockly.Python['def']=function(block){
    var name=Blockly.Python.valueToCode(block,'func_name',Blockly.Python.ORDER_NONE);
    var parr=Blockly.Python.valueToCode(block,'param',Blockly.Python.ORDER_NONE);
    var name_processed=name.replace(/\'/gi,'');
    var state=Blockly.Python.statementToCode(block,'func_body');
    var code="def "+name_processed+"("+parr+")"+":\n"+state+"\n";
    return code;
}

