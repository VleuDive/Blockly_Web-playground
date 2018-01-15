"use strict";

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type": "if_mult_of_three",
            "message0": "%1 is divided by 3",
            "args0": [
                {
                    "type": "input_value",
                    "func_name": "num",
                    "check": "Number"
                }
            ],
            "output": null,
            "colour": 230,
            "tooltip": "check if the number is divided by 3",
            "helpUrl": ""
        }
    ]
);
//def의 input 이름은 순서대로 func_func_name, param, func_body
Blockly.Blocks['container']={
    init: function() {
        this.appendDummyInput()
            .appendField("Container");
        this.appendStatementInput("STACK")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(350);
        this.setTooltip("");
        this.setHelpUrl("");
        this.hasStatements_=true;
    }
};
Blockly.Blocks['def']={
  init:function(){
      this.appendDummyInput().appendField('def');
      this.appendValueInput('func_name').setCheck('String');
      this.appendDummyInput().appendField(' with ');
      this.appendDummyInput().appendField(new Blockly.FieldNumber(0), "param");
      this.appendStatementInput('func_body').setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true,null);
      this.setNextStatement(true,null);
      this.setColour(350);
      this.setTooltip("defines function");
      this.setHelpUrl("");
      this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
      this.arguments_=[];
      this.hasStatements_=true;
      this.setStatements_(true);
      this.statementConnection_=null;
  },
    setStatements_:function(hasStatements){
      if(this.hasStatements_===hasStatements){
          return;
      }
      if(hasStatements){
          this.appendStatementInput('STACK');
          if(this.getInput('RETURN')){
              this.moveInputBefore('STACK','RETURN');
          }
      }else{
          this.removeInput('STACK',true);
      }
      this.hasStatements_=hasStatements;
    },
    updateParams_:function(){
      var badArg=false;
      var hash={};
      for(var i=0;i<this.arguments_.length;i++){
          if(hash['arg_'+this.arguments_[i].toLowerCase()]){
              badArg=true;
              break;
          }
          hash['arg'+this.arguments_[i].toLowerCase()]=true;
      }
      if(badArg){
          this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING);
      }else{
          this.setWarningText(null);
      }
      var paramString="";
      if(this.arguments_.length){
          paramString=Blockly.Msg.PROCEDURES_BEFORE_PARAMS+' '+this.arguments_.join(', ');
      }
      Blockly.Events.disable();
      try{
          this.setFieldValue(paramString,'param');
      }finally{
          Blockly.Events.enable();
      }
    },
    mutationToDom:function(opt_paramIds){
      var container=document.createElement('mutation');
      if(opt_paramIds){
          container.setAttribute('func_name',this.getFieldValue('func_name'));
      }
      for(var i=0;i<this.arguments_.length;i++){
          var parameter=document.createElement('arg')
          parameter.setAttribute('func_name',this.arguments_[i]);
          if(opt_paramIds&&this.paramIds_) {
              parameter.setAttribute('paramId', this.paramIds_[i]);
          }
          container.appendChild(parameter);
      }
      if(!this.hasStatements_){
          container.setAttribute('statements','false');
      }
      return container;
    },
    domToMutation:function(xmlElement){
      this.arguments_=[];
      for(var i=0,childNode;childNode=xmlElement;i++){
          if(childNode.nodeName.toLowerCase()=='arg'){
              this.arguments_.push(childNode.getAttribute('func_name'));
          }
      }
      this.updateParams_();
      Blockly.Procedures.mutateCallers(this);
      this.setStatements_(xmlElement.getAttribute('statements')!=='false');
    },
    decompose:function(workspace){
      var containerBlock=workspace.newBlock('container');
      containerBlock.initSvg();
      if(this.getInput('RETURN')){
          containerBlock.setFieldValue(this.hasStatements_ ? 'TRUE':'FALSE','STATEMENTS');
      }else{
          containerBlock.getInput('STACK').setVisible(false);
      }
      var connection=containerBlock.getInput('STACK').connection;
      for(var i=0;i<this.arguments_.length;i++){
          var paramBlock=workspace.newBlock('procedures_mutatorarg');
          paramBlock.initSvg();
          paramBlock.setFieldValue(this.arguments_[i],'STACK');
          paramBlock.oldLocation=i;
          connection.connect(paramBlock.previousConnection);
          connection=paramBlock.nextConnection;

      }
      Blockly.Procedures.mutateCallers(this);
      return containerBlock;
    },
    compose:function(containerBlock){
      this.arguments_=[];
      this.paramIds_=[];
      var paramBlock=containerBlock.getInputTargetBlock('func_body');
      while(paramBlock){
          this.arguments_.push(paramBlock.getFieldValue('func_name'));
          this.paramIds_.push(paramBlock.id);
          paramBlock=paramBlock.nextConnection&&
              paramBlock.nextConnection.targetBlock();
      }
      this.updateParams_();
      Blockly.Procedures.mutateCallers(this);
      var hasStatements=containerBlock.getFieldValue('STATEMENTS');
      if(hasStatements!==null){
          hasStatements=hasStatements =='TRUE';
          if(this.hasStatements_!=hasStatements){
              if(hasStatements){
                  this.setStatements_(true);
                  Blockly.Mutator.reconnect(this.statementConnection_,this,'func_body');
                  this.statementConnection_=null;
              }else{
                  var stackConnection=this.getInput('func_body').connection;
                  this.statementConnection_=stackConnection.targetConnection;
                  if(this.statementConnection_){
                      var stackBlock=stackConnection.targetBlock();
                      stackBlock.unplug();
                      stackBlock.bumpNeighbours_();
                  }
                  this.setStatements_(false);
              }
          }
      }
    },
    getProcedureDef:function(){
      return [this.getFieldValue('NAME'),this.arguments_,false];
    },
    getVars:function(){
      return this.arguments_;
    },
    renameVar:function(oldName,newName){
      var change=false;
      for(var i=0;i<this.arguments_.length;i++){
          if(Blockly.Names.equals(oldName,this.arguments_[i])){
              this.arguments_[i]=newName;
              change=true;
          }
      }
      if(change){
          this.updateParams_();
          if(this.mutator.isVisible()){
              var blocks=this.mutator.workspace_.getAllBlocks();
              for(var i=0,block;block=blocks[i];i++){
                  if(block.type=='procedures_mutatorarg'&&Blockly.Names.equals(oldName,block.getFieldValue('NAME'))){
                      block.setFieldValue(newName,'NAME');
                  }

              }
          }
      }
    },
 customContextMenu:function(){
   var option={enabled:true};
   var name=this.getFieldValue('NAME');
   option.text=Blockly.Msg.PROCEDURES_CREATE_DO.replace('%1',name);
   var xmlMutation=goog.dom.createDom('mutation');
   xmlMutation.setAttribute('name',name);
   for(var i=0;i<this.arguments_.length;i++){
       var xmlArg=goog.dom.createDom('arg');
       xmlArg.setAttribute('name',this.arguments_[i]);
       xmlMutation.appendChild(xmlArg);
   }
   var xmlBlock=goog.dom.createDom('block',null,xmlMutation);
   xmlBlock.setAttribute('type',this.callType_);
   option.callback=Blockly.ContextMenu.callbackFactory(this,xmlBlock);
   options.push(option);

   if(!this.isCollapsed()){
       for(var i=0;i<this.arguments_.length;i++){
           var option={enabled:true};
           var name=this.arguments_[i];
           option.text=Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1',name);
           var xmlField=goog.dom.createDom('field',null,name);
           xmlField.setAttribute('name','VAR');
           var xmlBlock=goog.dom.createDom('block',null,xmlField);
           xmlBlock.setAttribute('type','variables_get');
           option.callback=Blockly.ContextMenu.callbackFactory(this,xmlBlock);
           options.push(option);
       }
   }
 },
    callType_:/*'procedures_callnoreturn'*/'container'
};