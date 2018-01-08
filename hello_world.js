Blockly.Blocks['hello']={
    init:function(){
            this.appendDummyInput().appendField("Hello");
            this.setPreviousStatement(true,null);
            this.setNextStatement(true,null);
            this.setColour(160);
this.setTooltip("This is a function that prints hello world");
this.setHelpUrl("");
    }
}