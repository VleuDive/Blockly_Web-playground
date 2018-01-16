// Type definitions for blockly
// Project: https://developers.google.com/blockly/
// Definitions by: Troy McKinnon <https://github.com/trodi>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Blockly {

    class Block extends Block__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Block__Class  { 
    
            /**
             * Class for one block.
             * Not normally called directly, workspace.newBlock() is preferred.
             * @param {!Blockly.Workspace} workspace The block's workspace.
             * @param {?string} prototypeName Name of the language object containing
             *     type-specific functions for this block.
             * @param {string=} opt_id Optional ID.  Use this ID if provided, otherwise
             *     create a new ID.
             * @constructor
             */
            constructor(workspace: Blockly.Workspace, prototypeName: string, opt_id?: string);
    
            /** @type {string} */
            id: string;
    
            /** @type {Blockly.Connection} */
            outputConnection: Blockly.Connection;
    
            /** @type {Blockly.Connection} */
            nextConnection: Blockly.Connection;
    
            /** @type {Blockly.Connection} */
            previousConnection: Blockly.Connection;
    
            /** @type {!Array.<!Blockly.Input>} */
            inputList: Blockly.Input[];
    
            /** @type {boolean|undefined} */
            inputsInline: boolean|any /*undefined*/;
    
            /** @type {boolean} */
            disabled: boolean;
    
            /** @type {string|!Function} */
            tooltip: string|Function;
    
            /** @type {boolean} */
            contextMenu: boolean;
    
            /**
             * @type {Blockly.Block}
             * @private
             */
            parentBlock_: Blockly.Block;
    
            /**
             * @type {!Array.<!Blockly.Block>}
             * @private
             */
            childBlocks_: Blockly.Block[];
    
            /**
             * @type {boolean}
             * @private
             */
            deletable_: boolean;
    
            /**
             * @type {boolean}
             * @private
             */
            movable_: boolean;
    
            /**
             * @type {boolean}
             * @private
             */
            editable_: boolean;
    
            /**
             * @type {boolean}
             * @private
             */
            isShadow_: boolean;
    
            /**
             * @type {boolean}
             * @private
             */
            collapsed_: boolean;
    
            /** @type {string|Blockly.Comment} */
            comment: string|Blockly.Comment;
    
            /**
             * The block's position in workspace units.  (0, 0) is at the workspace's
             * origin; scale does not change this value.
             * @type {!goog.math.Coordinate}
             * @private
             */
            xy_: goog.math.Coordinate;
    
            /** @type {!Blockly.Workspace} */
            workspace: Blockly.Workspace;
    
            /** @type {boolean} */
            isInFlyout: boolean;
    
            /** @type {boolean} */
            isInMutator: boolean;
    
            /** @type {boolean} */
            RTL: boolean;
    
            /** @type {string} */
            type: string;
    
            /** @type {boolean|undefined} */
            inputsInlineDefault: boolean|any /*undefined*/;
    
            /**
             * Optional text data that round-trips beween blocks and XML.
             * Has no effect. May be used by 3rd parties for meta information.
             * @type {?string}
             */
            data: string;
    
            /**
             * Colour of the block in '#RRGGBB' format.
             * @type {string}
             * @private
             */
            colour_: string;
    
            /**
             * Colour of the block as HSV hue value (0-360)
             * @type {?number}
             * @private
              */
            hue_: number;
    
            /**
             * Dispose of this block.
             * @param {boolean} healStack If true, then try to heal any gap by connecting
             *     the next statement with the previous statement.  Otherwise, dispose of
             *     all children of this block.
             */
            dispose(healStack: boolean): void;
    
            /**
             * Unplug this block from its superior block.  If this block is a statement,
             * optionally reconnect the block underneath with the block on top.
             * @param {boolean=} opt_healStack Disconnect child statement and reconnect
             *   stack.  Defaults to false.
             */
            unplug(opt_healStack?: boolean): void;
    
            /**
             * Returns all connections originating from this block.
             * @param {boolean} all If true, return all connections even hidden ones.
             * @return {!Array.<!Blockly.Connection>} Array of connections.
             * @private
             */
            getConnections_(all: boolean): Blockly.Connection[];
    
            /**
             * Walks down a stack of blocks and finds the last next connection on the stack.
             * @return {Blockly.Connection} The last next connection on the stack, or null.
             * @package
             */
            lastConnectionInStack_(): Blockly.Connection;
    
            /**
             * Bump unconnected blocks out of alignment.  Two blocks which aren't actually
             * connected should not coincidentally line up on screen.
             * @private
             */
            bumpNeighbours_(): void;
    
            /**
             * Return the parent block or null if this block is at the top level.
             * @return {Blockly.Block} The block that holds the current block.
             */
            getParent(): Blockly.Block;
    
            /**
             * Return the input that connects to the specified block.
             * @param {!Blockly.Block} block A block connected to an input on this block.
             * @return {Blockly.Input} The input that connects to the specified block.
             */
            getInputWithBlock(block: Blockly.Block): Blockly.Input;
    
            /**
             * Return the parent block that surrounds the current block, or null if this
             * block has no surrounding block.  A parent block might just be the previous
             * statement, whereas the surrounding block is an if statement, while loop, etc.
             * @return {Blockly.Block} The block that surrounds the current block.
             */
            getSurroundParent(): Blockly.Block;
    
            /**
             * Return the next statement block directly connected to this block.
             * @return {Blockly.Block} The next statement block or null.
             */
            getNextBlock(): Blockly.Block;
    
            /**
             * Return the top-most block in this block's tree.
             * This will return itself if this block is at the top level.
             * @return {!Blockly.Block} The root block.
             */
            getRootBlock(): Blockly.Block;
    
            /**
             * Find all the blocks that are directly nested inside this one.
             * Includes value and block inputs, as well as any following statement.
             * Excludes any connection on an output tab or any preceding statement.
             * @return {!Array.<!Blockly.Block>} Array of blocks.
             */
            getChildren(): Blockly.Block[];
    
            /**
             * Set parent of this block to be a new block or null.
             * @param {Blockly.Block} newParent New parent block.
             */
            setParent(newParent: Blockly.Block): void;
    
            /**
             * Find all the blocks that are directly or indirectly nested inside this one.
             * Includes this block in the list.
             * Includes value and block inputs, as well as any following statements.
             * Excludes any connection on an output tab or any preceding statements.
             * @return {!Array.<!Blockly.Block>} Flattened array of blocks.
             */
            getDescendants(): Blockly.Block[];
    
            /**
             * Get whether this block is deletable or not.
             * @return {boolean} True if deletable.
             */
            isDeletable(): boolean;
    
            /**
             * Set whether this block is deletable or not.
             * @param {boolean} deletable True if deletable.
             */
            setDeletable(deletable: boolean): void;
    
            /**
             * Get whether this block is movable or not.
             * @return {boolean} True if movable.
             */
            isMovable(): boolean;
    
            /**
             * Set whether this block is movable or not.
             * @param {boolean} movable True if movable.
             */
            setMovable(movable: boolean): void;
    
            /**
             * Get whether this block is a shadow block or not.
             * @return {boolean} True if a shadow.
             */
            isShadow(): boolean;
    
            /**
             * Set whether this block is a shadow block or not.
             * @param {boolean} shadow True if a shadow.
             */
            setShadow(shadow: boolean): void;
    
            /**
             * Get whether this block is editable or not.
             * @return {boolean} True if editable.
             */
            isEditable(): boolean;
    
            /**
             * Set whether this block is editable or not.
             * @param {boolean} editable True if editable.
             */
            setEditable(editable: boolean): void;
    
            /**
             * Set whether the connections are hidden (not tracked in a database) or not.
             * Recursively walk down all child blocks (except collapsed blocks).
             * @param {boolean} hidden True if connections are hidden.
             */
            setConnectionsHidden(hidden: boolean): void;
    
            /**
             * Set the URL of this block's help page.
             * @param {string|Function} url URL string for block help, or function that
             *     returns a URL.  Null for no help.
             */
            setHelpUrl(url: string|Function): void;
    
            /**
             * Change the tooltip text for a block.
             * @param {string|!Function} newTip Text for tooltip or a parent element to
             *     link to for its tooltip.  May be a function that returns a string.
             */
            setTooltip(newTip: string|Function): void;
    
            /**
             * Get the colour of a block.
             * @return {string} #RRGGBB string.
             */
            getColour(): string;
    
            /**
             * Get the HSV hue value of a block. Null if hue not set.
             * @return {?number} Hue value (0-360)
             */
            getHue(): number;
    
            /**
             * Change the colour of a block.
             * @param {number|string} colour HSV hue value, or #RRGGBB string.
             */
            setColour(colour: number|string): void;
    
            /**
             * Sets a callback function to use whenever the block's parent workspace
             * changes, replacing any prior onchange handler. This is usually only called
             * from the constructor, the block type initializer function, or an extension
             * initializer function.
             * @param {function(Blockly.Events.Abstract)} onchangeFn The callback to call
             *     when the block's workspace changes.
             * @throws {Error} if onchangeFn is not falsey or a function.
             */
            setOnChange(onchangeFn: { (_0: Blockly.Events.Abstract): any /*missing*/ }): void;
    
            /**
             * Returns the named field from a block.
             * @param {string} name The name of the field.
             * @return {Blockly.Field} Named field, or null if field does not exist.
             */
            getField(name: string): Blockly.Field;
    
            /**
             * Return all variables referenced by this block.
             * @return {!Array.<string>} List of variable names.
             */
            getVars(): string[];
    
            /**
             * Notification that a variable is renaming.
             * If the name matches one of this block's variables, rename it.
             * @param {string} oldName Previous name of variable.
             * @param {string} newName Renamed variable.
             */
            renameVar(oldName: string, newName: string): void;
    
            /**
             * Returns the language-neutral value from the field of a block.
             * @param {string} name The name of the field.
             * @return {?string} Value from the field or null if field does not exist.
             */
            getFieldValue(name: string): string;
    
            /**
             * Change the field value for a block (e.g. 'CHOOSE' or 'REMOVE').
             * @param {string} newValue Value to be the new field.
             * @param {string} name The name of the field.
             */
            setFieldValue(newValue: string, name: string): void;
    
            /**
             * Set whether this block can chain onto the bottom of another block.
             * @param {boolean} newBoolean True if there can be a previous statement.
             * @param {(string|Array.<string>|null)=} opt_check Statement type or
             *     list of statement types.  Null/undefined if any type could be connected.
             */
            setPreviousStatement(newBoolean: boolean, opt_check?: string|string[]|any /*null*/): void;
    
            /**
             * Set whether another block can chain onto the bottom of this block.
             * @param {boolean} newBoolean True if there can be a next statement.
             * @param {(string|Array.<string>|null)=} opt_check Statement type or
             *     list of statement types.  Null/undefined if any type could be connected.
             */
            setNextStatement(newBoolean: boolean, opt_check?: string|string[]|any /*null*/): void;
    
            /**
             * Set whether this block returns a value.
             * @param {boolean} newBoolean True if there is an output.
             * @param {(string|Array.<string>|null)=} opt_check Returned type or list
             *     of returned types.  Null or undefined if any type could be returned
             *     (e.g. variable get).
             */
            setOutput(newBoolean: boolean, opt_check?: string|string[]|any /*null*/): void;
    
            /**
             * Set whether value inputs are arranged horizontally or vertically.
             * @param {boolean} newBoolean True if inputs are horizontal.
             */
            setInputsInline(newBoolean: boolean): void;
    
            /**
             * Get whether value inputs are arranged horizontally or vertically.
             * @return {boolean} True if inputs are horizontal.
             */
            getInputsInline(): boolean;
    
            /**
             * Set whether the block is disabled or not.
             * @param {boolean} disabled True if disabled.
             */
            setDisabled(disabled: boolean): void;
    
            /**
             * Get whether the block is disabled or not due to parents.
             * The block's own disabled property is not considered.
             * @return {boolean} True if disabled.
             */
            getInheritedDisabled(): boolean;
    
            /**
             * Get whether the block is collapsed or not.
             * @return {boolean} True if collapsed.
             */
            isCollapsed(): boolean;
    
            /**
             * Set whether the block is collapsed or not.
             * @param {boolean} collapsed True if collapsed.
             */
            setCollapsed(collapsed: boolean): void;
    
            /**
             * Create a human-readable text representation of this block and any children.
             * @param {number=} opt_maxLength Truncate the string to this length.
             * @param {string=} opt_emptyToken The placeholder string used to denote an
             *     empty field. If not specified, '?' is used.
             * @return {string} Text of block.
             */
            toString(opt_maxLength?: number, opt_emptyToken?: string): string;
    
            /**
             * Shortcut for appending a value input row.
             * @param {string} name Language-neutral identifier which may used to find this
             *     input again.  Should be unique to this block.
             * @return {!Blockly.Input} The input object created.
             */
            appendValueInput(name: string): Blockly.Input;
    
            /**
             * Shortcut for appending a statement input row.
             * @param {string} name Language-neutral identifier which may used to find this
             *     input again.  Should be unique to this block.
             * @return {!Blockly.Input} The input object created.
             */
            appendStatementInput(name: string): Blockly.Input;
    
            /**
             * Shortcut for appending a dummy input row.
             * @param {string=} opt_name Language-neutral identifier which may used to find
             *     this input again.  Should be unique to this block.
             * @return {!Blockly.Input} The input object created.
             */
            appendDummyInput(opt_name?: string): Blockly.Input;
    
            /**
             * Initialize this block using a cross-platform, internationalization-friendly
             * JSON description.
             * @param {!Object} json Structured data describing the block.
             */
            jsonInit(json: Object): void;
    
            /**
             * Add key/values from mixinObj to this block object. By default, this method
             * will check that the keys in mixinObj will not overwrite existing values in
             * the block, including prototype values. This provides some insurance against
             * mixin / extension incompatibilities with future block features. This check
             * can be disabled by passing true as the second argument.
             * @param {!Object} mixinObj The key/values pairs to add to this block object.
             * @param {boolean=} opt_disableCheck Option flag to disable overwrite checks.
             */
            mixin(mixinObj: Object, opt_disableCheck?: boolean): void;
    
            /**
             * Interpolate a message description onto the block.
             * @param {string} message Text contains interpolation tokens (%1, %2, ...)
             *     that match with fields or inputs defined in the args array.
             * @param {!Array} args Array of arguments to be interpolated.
             * @param {string=} lastDummyAlign If a dummy input is added at the end,
             *     how should it be aligned?
             * @private
             */
            interpolate_(message: string, args: any[], lastDummyAlign?: string): void;
    
            /**
             * Add a value input, statement input or local variable to this block.
             * @param {number} type Either Blockly.INPUT_VALUE or Blockly.NEXT_STATEMENT or
             *     Blockly.DUMMY_INPUT.
             * @param {string} name Language-neutral identifier which may used to find this
             *     input again.  Should be unique to this block.
             * @return {!Blockly.Input} The input object created.
             * @private
             */
            appendInput_(type: number, name: string): Blockly.Input;
    
            /**
             * Move a named input to a different location on this block.
             * @param {string} name The name of the input to move.
             * @param {?string} refName Name of input that should be after the moved input,
             *   or null to be the input at the end.
             */
            moveInputBefore(name: string, refName: string): void;
    
            /**
             * Move a numbered input to a different location on this block.
             * @param {number} inputIndex Index of the input to move.
             * @param {number} refIndex Index of input that should be after the moved input.
             */
            moveNumberedInputBefore(inputIndex: number, refIndex: number): void;
    
            /**
             * Remove an input from this block.
             * @param {string} name The name of the input.
             * @param {boolean=} opt_quiet True to prevent error if input is not present.
             * @throws {goog.asserts.AssertionError} if the input is not present and
             *     opt_quiet is not true.
             */
            removeInput(name: string, opt_quiet?: boolean): void;
    
            /**
             * Fetches the named input object.
             * @param {string} name The name of the input.
             * @return {Blockly.Input} The input object, or null if input does not exist.
             */
            getInput(name: string): Blockly.Input;
    
            /**
             * Fetches the block attached to the named input.
             * @param {string} name The name of the input.
             * @return {Blockly.Block} The attached value block, or null if the input is
             *     either disconnected or if the input does not exist.
             */
            getInputTargetBlock(name: string): Blockly.Block;
    
            /**
             * Returns the comment on this block (or '' if none).
             * @return {string} Block's comment.
             */
            getCommentText(): string;
    
            /**
             * Set this block's comment text.
             * @param {?string} text The text, or null to delete.
             */
            setCommentText(text: string): void;
    
            /**
             * Set this block's warning text.
             * @param {?string} text The text, or null to delete.
             * @param {string=} opt_id An optional ID for the warning text to be able to
             *     maintain multiple warnings.
             */
            setWarningText(text: string, opt_id?: string): void;
    
            /**
             * Give this block a mutator dialog.
             * @param {Blockly.Mutator} mutator A mutator dialog instance or null to remove.
             */
            setMutator(mutator: Blockly.Mutator): void;
    
            /**
             * Return the coordinates of the top-left corner of this block relative to the
             * drawing surface's origin (0,0), in workspace units.
             * @return {!goog.math.Coordinate} Object with .x and .y properties.
             */
            getRelativeToSurfaceXY(): goog.math.Coordinate;
    
            /**
             * Move a block by a relative offset.
             * @param {number} dx Horizontal offset, in workspace units.
             * @param {number} dy Vertical offset, in workspace units.
             */
            moveBy(dx: number, dy: number): void;
    
            /**
             * Create a connection of the specified type.
             * @param {number} type The type of the connection to create.
             * @return {!Blockly.Connection} A new connection of the specified type.
             * @private
             */
            makeConnection_(type: number): Blockly.Connection;
    
            /**
             * Recursively checks whether all statement and value inputs are filled with
             * blocks. Also checks all following statement blocks in this stack.
             * @param {boolean=} opt_shadowBlocksAreFilled An optional argument controlling
             *     whether shadow blocks are counted as filled. Defaults to true.
             * @return {boolean} True if all inputs are filled, false otherwise.
             */
            allInputsFilled(opt_shadowBlocksAreFilled?: boolean): boolean;
    
            /**
             * This method returns a string describing this Block in developer terms (type
             * name and ID; English only).
             *
             * Intended to on be used in console logs and errors. If you need a string that
             * uses the user's native language (including block text, field values, and
             * child blocks), use [toString()]{@link Blockly.Block#toString}.
             * @return {string} The description.
             */
            toDevString(): string;
    } 
    
}

declare module Blockly.Block {

    /**
     * Obtain a newly created block.
     * @param {!Blockly.Workspace} workspace The block's workspace.
     * @param {?string} prototypeName Name of the language object containing
     *     type-specific functions for this block.
     * @return {!Blockly.Block} The created block.
     * @deprecated December 2015
     */
    function obtain(workspace: Blockly.Workspace, prototypeName: string): Blockly.Block;

    /**
     * Helper function to construct a FieldImage from a JSON arg object,
     * dereferencing any string table references.
     * @param {!Object} options A JSON object with options (src, width, height, and alt).
     * @returns {!Blockly.FieldImage} The new image.
     * @private
     */
    function newFieldImageFromJson_(options: Object): Blockly.FieldImage;

    /**
     * Helper function to construct a FieldLabel from a JSON arg object,
     * dereferencing any string table references.
     * @param {!Object} options A JSON object with options (text, and class).
     * @returns {!Blockly.FieldLabel} The new label.
     * @private
     */
    function newFieldLabelFromJson_(options: Object): Blockly.FieldLabel;

    /**
     * Helper function to construct a FieldTextInput from a JSON arg object,
     * dereferencing any string table references.
     * @param {!Object} options A JSON object with options (text, class, and
     *                          spellcheck).
     * @returns {!Blockly.FieldTextInput} The new text input.
     * @private
     */
    function newFieldTextInputFromJson_(options: Object): Blockly.FieldTextInput;

    /**
     * Helper function to construct a FieldVariable from a JSON arg object,
     * dereferencing any string table references.
     * @param {!Object} options A JSON object with options (variable).
     * @returns {!Blockly.FieldVariable} The variable field.
     * @private
     */
    function newFieldVariableFromJson_(options: Object): Blockly.FieldVariable;
}

declare module Blockly {

    class BlockDragSurfaceSvg extends BlockDragSurfaceSvg__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class BlockDragSurfaceSvg__Class  { 
    
            /**
             * Class for a drag surface for the currently dragged block. This is a separate
             * SVG that contains only the currently moving block, or nothing.
             * @param {!Element} container Containing element.
             * @constructor
             */
            constructor(container: Element);
    
            /**
             * Containing HTML element; parent of the workspace and the drag surface.
             * @type {Element}
             * @private
             */
            container_: Element;
    
            /**
             * The SVG drag surface. Set once by Blockly.BlockDragSurfaceSvg.createDom.
             * @type {Element}
             * @private
             */
            SVG_: Element;
    
            /**
             * This is where blocks live while they are being dragged if the drag surface
             * is enabled.
             * @type {Element}
             * @private
             */
            dragGroup_: Element;
    
            /**
             * Cached value for the scale of the drag surface.
             * Used to set/get the correct translation during and after a drag.
             * @type {number}
             * @private
             */
            scale_: number;
    
            /**
             * Cached value for the translation of the drag surface.
             * This translation is in pixel units, because the scale is applied to the
             * drag group rather than the top-level SVG.
             * @type {goog.math.Coordinate}
             * @private
             */
            surfaceXY_: goog.math.Coordinate;
    
            /**
             * Create the drag surface and inject it into the container.
             */
            createDom(): void;
    
            /**
             * Set the SVG blocks on the drag surface's group and show the surface.
             * Only one block group should be on the drag surface at a time.
             * @param {!Element} blocks Block or group of blocks to place on the drag
             * surface.
             */
            setBlocksAndShow(blocks: Element): void;
    
            /**
             * Translate and scale the entire drag surface group to the given position, to
             * keep in sync with the workspace.
             * @param {number} x X translation in workspace coordinates.
             * @param {number} y Y translation in workspace coordinates.
             * @param {number} scale Scale of the group.
             */
            translateAndScaleGroup(x: number, y: number, scale: number): void;
    
            /**
             * Translate the drag surface's SVG based on its internal state.
             * @private
             */
            translateSurfaceInternal_(): void;
    
            /**
             * Translate the entire drag surface during a drag.
             * We translate the drag surface instead of the blocks inside the surface
             * so that the browser avoids repainting the SVG.
             * Because of this, the drag coordinates must be adjusted by scale.
             * @param {number} x X translation for the entire surface.
             * @param {number} y Y translation for the entire surface.
             */
            translateSurface(x: number, y: number): void;
    
            /**
             * Reports the surface translation in scaled workspace coordinates.
             * Use this when finishing a drag to return blocks to the correct position.
             * @return {!goog.math.Coordinate} Current translation of the surface.
             */
            getSurfaceTranslation(): goog.math.Coordinate;
    
            /**
             * Provide a reference to the drag group (primarily for
             * BlockSvg.getRelativeToSurfaceXY).
             * @return {Element} Drag surface group element.
             */
            getGroup(): Element;
    
            /**
             * Get the current blocks on the drag surface, if any (primarily
             * for BlockSvg.getRelativeToSurfaceXY).
             * @return {!Element|undefined} Drag surface block DOM element, or undefined
             * if no blocks exist.
             */
            getCurrentBlock(): Element|any /*undefined*/;
    
            /**
             * Clear the group and hide the surface; move the blocks off onto the provided
             * element.
             * If the block is being deleted it doesn't need to go back to the original
             * surface, since it would be removed immediately during dispose.
             * @param {Element=} opt_newSurface Surface the dragging blocks should be moved
             *     to, or null if the blocks should be removed from this surface without
             *     being moved to a different surface.
             */
            clearAndHide(opt_newSurface?: Element): void;
    } 
    
}

declare module Blockly {

    class BlockDragger extends BlockDragger__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class BlockDragger__Class  { 
    
            /**
             * Class for a block dragger.  It moves blocks around the workspace when they
             * are being dragged by a mouse or touch.
             * @param {!Blockly.Block} block The block to drag.
             * @param {!Blockly.WorkspaceSvg} workspace The workspace to drag on.
             * @constructor
             */
            constructor(block: Blockly.Block, workspace: Blockly.WorkspaceSvg);
    
            /**
             * The top block in the stack that is being dragged.
             * @type {!Blockly.BlockSvg}
             * @private
             */
            draggingBlock_: Blockly.BlockSvg;
    
            /**
             * The workspace on which the block is being dragged.
             * @type {!Blockly.WorkspaceSvg}
             * @private
             */
            workspace_: Blockly.WorkspaceSvg;
    
            /**
             * Object that keeps track of connections on dragged blocks.
             * @type {!Blockly.DraggedConnectionManager}
             * @private
             */
            draggedConnectionManager_: Blockly.DraggedConnectionManager;
    
            /**
             * Which delete area the mouse pointer is over, if any.
             * One of {@link Blockly.DELETE_AREA_TRASH},
             * {@link Blockly.DELETE_AREA_TOOLBOX}, or {@link Blockly.DELETE_AREA_NONE}.
             * @type {?number}
             * @private
             */
            deleteArea_: number;
    
            /**
             * Whether the block would be deleted if dropped immediately.
             * @type {boolean}
             * @private
             */
            wouldDeleteBlock_: boolean;
    
            /**
             * The location of the top left corner of the dragging block at the beginning
             * of the drag in workspace coordinates.
             * @type {!goog.math.Coordinate}
             * @private
             */
            startXY_: goog.math.Coordinate;
    
            /**
             * A list of all of the icons (comment, warning, and mutator) that are
             * on this block and its descendants.  Moving an icon moves the bubble that
             * extends from it if that bubble is open.
             * @type {Array.<!Object>}
             * @private
             */
            dragIconData_: Object[];
    
            /**
             * Sever all links from this object.
             * @package
             */
            dispose(): void;
    
            /**
             * Start dragging a block.  This includes moving it to the drag surface.
             * @param {!goog.math.Coordinate} currentDragDeltaXY How far the pointer has
             *     moved from the position at mouse down, in pixel units.
             * @package
             */
            startBlockDrag(currentDragDeltaXY: goog.math.Coordinate): void;
    
            /**
             * Execute a step of block dragging, based on the given event.  Update the
             * display accordingly.
             * @param {!Event} e The most recent move event.
             * @param {!goog.math.Coordinate} currentDragDeltaXY How far the pointer has
             *     moved from the position at the start of the drag, in pixel units.
             * @package
             */
            dragBlock(e: Event, currentDragDeltaXY: goog.math.Coordinate): void;
    
            /**
             * Finish a block drag and put the block back on the workspace.
             * @param {!Event} e The mouseup/touchend event.
             * @param {!goog.math.Coordinate} currentDragDeltaXY How far the pointer has
             *     moved from the position at the start of the drag, in pixel units.
             * @package
             */
            endBlockDrag(e: Event, currentDragDeltaXY: goog.math.Coordinate): void;
    
            /**
             * Fire a move event at the end of a block drag.
             * @private
             */
            fireMoveEvent_(): void;
    
            /**
             * Shut the trash can and, if necessary, delete the dragging block.
             * Should be called at the end of a block drag.
             * @return {boolean} whether the block was deleted.
             * @private
             */
            maybeDeleteBlock_(): boolean;
    
            /**
             * Update the cursor (and possibly the trash can lid) to reflect whether the
             * dragging block would be deleted if released immediately.
             * @private
             */
            updateCursorDuringBlockDrag_(): void;
    
            /**
             * Convert a coordinate object from pixels to workspace units, including a
             * correction for mutator workspaces.
             * This function does not consider differing origins.  It simply scales the
             * input's x and y values.
             * @param {!goog.math.Coordinate} pixelCoord A coordinate with x and y values
             *     in css pixel units.
             * @return {!goog.math.Coordinate} The input coordinate divided by the workspace
             *     scale.
             * @private
             */
            pixelsToWorkspaceUnits_(pixelCoord: goog.math.Coordinate): goog.math.Coordinate;
    
            /**
             * Move all of the icons connected to this drag.
             * @param {!goog.math.Coordinate} dxy How far to move the icons from their
             *     original positions, in workspace units.
             * @private
             */
            dragIcons_(dxy: goog.math.Coordinate): void;
    } 
    
}

declare module Blockly.BlockDragger {

    /**
     * Make a list of all of the icons (comment, warning, and mutator) that are
     * on this block and its descendants.  Moving an icon moves the bubble that
     * extends from it if that bubble is open.
     * @param {!Blockly.BlockSvg} block The root block that is being dragged.
     * @return {!Array.<!Object>} The list of all icons and their locations.
     * @private
     */
    function initIconData_(block: Blockly.BlockSvg): Object[];
}

declare module Blockly.BlockSvg {

    /**
     * Horizontal space between elements.
     * @const
     */
    var SEP_SPACE_X: any /*missing*/;

    /**
     * Vertical space between elements.
     * @const
     */
    var SEP_SPACE_Y: any /*missing*/;

    /**
     * Vertical padding around inline elements.
     * @const
     */
    var INLINE_PADDING_Y: any /*missing*/;

    /**
     * Minimum height of a block.
     * @const
     */
    var MIN_BLOCK_Y: any /*missing*/;

    /**
     * Height of horizontal puzzle tab.
     * @const
     */
    var TAB_HEIGHT: any /*missing*/;

    /**
     * Width of horizontal puzzle tab.
     * @const
     */
    var TAB_WIDTH: any /*missing*/;

    /**
     * Width of vertical tab (inc left margin).
     * @const
     */
    var NOTCH_WIDTH: any /*missing*/;

    /**
     * Rounded corner radius.
     * @const
     */
    var CORNER_RADIUS: any /*missing*/;

    /**
     * Do blocks with no previous or output connections have a 'hat' on top?
     * @const
     */
    var START_HAT: any /*missing*/;

    /**
     * Height of the top hat.
     * @const
     */
    var START_HAT_HEIGHT: any /*missing*/;

    /**
     * Path of the top hat's curve.
     * @const
     */
    var START_HAT_PATH: any /*missing*/;

    /**
     * Path of the top hat's curve's highlight in LTR.
     * @const
     */
    var START_HAT_HIGHLIGHT_LTR: any /*missing*/;

    /**
     * Path of the top hat's curve's highlight in RTL.
     * @const
     */
    var START_HAT_HIGHLIGHT_RTL: any /*missing*/;

    /**
     * Distance from shape edge to intersect with a curved corner at 45 degrees.
     * Applies to highlighting on around the inside of a curve.
     * @const
     */
    var DISTANCE_45_INSIDE: any /*missing*/;

    /**
     * Distance from shape edge to intersect with a curved corner at 45 degrees.
     * Applies to highlighting on around the outside of a curve.
     * @const
     */
    var DISTANCE_45_OUTSIDE: any /*missing*/;

    /**
     * SVG path for drawing next/previous notch from left to right.
     * @const
     */
    var NOTCH_PATH_LEFT: any /*missing*/;

    /**
     * SVG path for drawing next/previous notch from left to right with
     * highlighting.
     * @const
     */
    var NOTCH_PATH_LEFT_HIGHLIGHT: any /*missing*/;

    /**
     * SVG path for drawing next/previous notch from right to left.
     * @const
     */
    var NOTCH_PATH_RIGHT: any /*missing*/;

    /**
     * SVG path for drawing jagged teeth at the end of collapsed blocks.
     * @const
     */
    var JAGGED_TEETH: any /*missing*/;

    /**
     * Height of SVG path for jagged teeth at the end of collapsed blocks.
     * @const
     */
    var JAGGED_TEETH_HEIGHT: any /*missing*/;

    /**
     * Width of SVG path for jagged teeth at the end of collapsed blocks.
     * @const
     */
    var JAGGED_TEETH_WIDTH: any /*missing*/;

    /**
     * SVG path for drawing a horizontal puzzle tab from top to bottom.
     * @const
     */
    var TAB_PATH_DOWN: any /*missing*/;

    /**
     * SVG path for drawing a horizontal puzzle tab from top to bottom with
     * highlighting from the upper-right.
     * @const
     */
    var TAB_PATH_DOWN_HIGHLIGHT_RTL: any /*missing*/;

    /**
     * SVG start point for drawing the top-left corner.
     * @const
     */
    var TOP_LEFT_CORNER_START: any /*missing*/;

    /**
     * SVG start point for drawing the top-left corner's highlight in RTL.
     * @const
     */
    var TOP_LEFT_CORNER_START_HIGHLIGHT_RTL: any /*missing*/;

    /**
     * SVG start point for drawing the top-left corner's highlight in LTR.
     * @const
     */
    var TOP_LEFT_CORNER_START_HIGHLIGHT_LTR: any /*missing*/;

    /**
     * SVG path for drawing the rounded top-left corner.
     * @const
     */
    var TOP_LEFT_CORNER: any /*missing*/;

    /**
     * SVG path for drawing the highlight on the rounded top-left corner.
     * @const
     */
    var TOP_LEFT_CORNER_HIGHLIGHT: any /*missing*/;

    /**
     * SVG path for drawing the top-left corner of a statement input.
     * Includes the top notch, a horizontal space, and the rounded inside corner.
     * @const
     */
    var INNER_TOP_LEFT_CORNER: any /*missing*/;

    /**
     * SVG path for drawing the bottom-left corner of a statement input.
     * Includes the rounded inside corner.
     * @const
     */
    var INNER_BOTTOM_LEFT_CORNER: any /*missing*/;

    /**
     * SVG path for drawing highlight on the top-left corner of a statement
     * input in RTL.
     * @const
     */
    var INNER_TOP_LEFT_CORNER_HIGHLIGHT_RTL: any /*missing*/;

    /**
     * SVG path for drawing highlight on the bottom-left corner of a statement
     * input in RTL.
     * @const
     */
    var INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_RTL: any /*missing*/;

    /**
     * SVG path for drawing highlight on the bottom-left corner of a statement
     * input in LTR.
     * @const
     */
    var INNER_BOTTOM_LEFT_CORNER_HIGHLIGHT_LTR: any /*missing*/;
}

declare module Blockly {

    class BlockSvg extends BlockSvg__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class BlockSvg__Class extends Blockly.Block__Class  { 
    
            /**
             * Class for a block's SVG representation.
             * Not normally called directly, workspace.newBlock() is preferred.
             * @param {!Blockly.Workspace} workspace The block's workspace.
             * @param {?string} prototypeName Name of the language object containing
             *     type-specific functions for this block.
             * @param {string=} opt_id Optional ID.  Use this ID if provided, otherwise
             *     create a new ID.
             * @extends {Blockly.Block}
             * @constructor
             */
            constructor(workspace: Blockly.Workspace, prototypeName: string, opt_id?: string);
    
            /**
             * @type {SVGElement}
             * @private
             */
            svgGroup_: SVGElement;
    
            /**
             * @type {SVGElement}
             * @private
             */
            svgPathDark_: SVGElement;
    
            /**
             * @type {SVGElement}
             * @private
             */
            svgPath_: SVGElement;
    
            /**
             * @type {SVGElement}
             * @private
             */
            svgPathLight_: SVGElement;
    
            /** @type {boolean} */
            rendered: boolean;
    
            /**
             * Whether to move the block to the drag surface when it is dragged.
             * True if it should move, false if it should be translated directly.
             * @type {boolean}
             * @private
             */
            useDragSurface_: boolean;
    
            /**
             * Height of this block, not including any statement blocks above or below.
             * Height is in workspace units.
             */
            height: any /*missing*/;
    
            /**
             * Width of this block, including any connected value blocks.
             * Width is in workspace units.
             */
            width: any /*missing*/;
    
            /**
             * Original location of block being dragged.
             * @type {goog.math.Coordinate}
             * @private
             */
            dragStartXY_: goog.math.Coordinate;
    
            /**
             * Map from IDs for warnings text to PIDs of functions to apply them.
             * Used to be able to maintain multiple warnings.
             * @type {Object.<string, number>}
             * @private
             */
            warningTextDb_: { [key: string]: number };
    
            /**
             * Create and initialize the SVG representation of the block.
             * May be called more than once.
             */
            initSvg(): void;
    
            /**
             * Select this block.  Highlight it visually.
             */
            select(): void;
    
            /**
             * Unselect this block.  Remove its highlighting.
             */
            unselect(): void;
    
            /**
             * Block's mutator icon (if any).
             * @type {Blockly.Mutator}
             */
            mutator: Blockly.Mutator;
    
            /**
             * Block's comment icon (if any).
             * @type {Blockly.Comment}
             */
            comment: Blockly.Comment;
    
            /**
             * Block's warning icon (if any).
             * @type {Blockly.Warning}
             */
            warning: Blockly.Warning;
    
            /**
             * Returns a list of mutator, comment, and warning icons.
             * @return {!Array} List of icons.
             */
            getIcons(): any[];
    
            /**
             * Set parent of this block to be a new block or null.
             * @param {Blockly.BlockSvg} newParent New parent block.
             */
            setParent(newParent: Blockly.BlockSvg): void;
    
            /**
             * Return the coordinates of the top-left corner of this block relative to the
             * drawing surface's origin (0,0), in workspace units.
             * If the block is on the workspace, (0, 0) is the origin of the workspace
             * coordinate system.
             * This does not change with workspace scale.
             * @return {!goog.math.Coordinate} Object with .x and .y properties in
             *     workspace coordinates.
             */
            getRelativeToSurfaceXY(): goog.math.Coordinate;
    
            /**
             * Move a block by a relative offset.
             * @param {number} dx Horizontal offset in workspace units.
             * @param {number} dy Vertical offset in workspace units.
             */
            moveBy(dx: number, dy: number): void;
    
            /**
             * Transforms a block by setting the translation on the transform attribute
             * of the block's SVG.
             * @param {number} x The x coordinate of the translation in workspace units.
             * @param {number} y The y coordinate of the translation in workspace units.
             */
            translate(x: number, y: number): void;
    
            /**
             * Move this block to its workspace's drag surface, accounting for positioning.
             * Generally should be called at the same time as setDragging_(true).
             * Does nothing if useDragSurface_ is false.
             * @private
             */
            moveToDragSurface_(): void;
    
            /**
             * Move this block back to the workspace block canvas.
             * Generally should be called at the same time as setDragging_(false).
             * Does nothing if useDragSurface_ is false.
             * @param {!goog.math.Coordinate} newXY The position the block should take on
             *     on the workspace canvas, in workspace coordinates.
             * @private
             */
            moveOffDragSurface_(newXY: goog.math.Coordinate): void;
    
            /**
             * Move this block during a drag, taking into account whether we are using a
             * drag surface to translate blocks.
             * This block must be a top-level block.
             * @param {!goog.math.Coordinate} newLoc The location to translate to, in
             *     workspace coordinates.
             * @package
             */
            moveDuringDrag(newLoc: goog.math.Coordinate): void;
    
            /**
             * Clear the block of transform="..." attributes.
             * Used when the block is switching from 3d to 2d transform or vice versa.
             * @private
             */
            clearTransformAttributes_(): void;
    
            /**
             * Snap this block to the nearest grid point.
             */
            snapToGrid(): void;
    
            /**
             * Returns the coordinates of a bounding box describing the dimensions of this
             * block and any blocks stacked below it.
             * Coordinate system: workspace coordinates.
             * @return {!{topLeft: goog.math.Coordinate, bottomRight: goog.math.Coordinate}}
             *    Object with top left and bottom right coordinates of the bounding box.
             */
            getBoundingRectangle(): { topLeft: goog.math.Coordinate; bottomRight: goog.math.Coordinate };
    
            /**
             * Set whether the block is collapsed or not.
             * @param {boolean} collapsed True if collapsed.
             */
            setCollapsed(collapsed: boolean): void;
    
            /**
             * Open the next (or previous) FieldTextInput.
             * @param {Blockly.Field|Blockly.Block} start Current location.
             * @param {boolean} forward If true go forward, otherwise backward.
             */
            tab(start: Blockly.Field|Blockly.Block, forward: boolean): void;
    
            /**
             * Create an ordered list of all text fields and connected inputs.
             * @return {!Array.<!Blockly.FieldTextInput|!Blockly.Input>} The ordered list.
             * @private
             */
            createTabList_(): Blockly.FieldTextInput|Blockly.Input[];
    
            /**
             * Handle a mouse-down on an SVG block.
             * @param {!Event} e Mouse down event or touch start event.
             * @private
             */
            onMouseDown_(e: Event): void;
    
            /**
             * Load the block's help page in a new window.
             * @private
             */
            showHelp_(): void;
    
            /**
             * Show the context menu for this block.
             * @param {!Event} e Mouse event.
             * @private
             */
            showContextMenu_(e: Event): void;
    
            /**
             * Move the connections for this block and all blocks attached under it.
             * Also update any attached bubbles.
             * @param {number} dx Horizontal offset from current location, in workspace
             *     units.
             * @param {number} dy Vertical offset from current location, in workspace
             *     units.
             * @private
             */
            moveConnections_(dx: number, dy: number): void;
    
            /**
             * Recursively adds or removes the dragging class to this node and its children.
             * @param {boolean} adding True if adding, false if removing.
             * @package
             */
            setDragging(adding: boolean): void;
    
            /**
             * Add or remove the UI indicating if this block is movable or not.
             */
            updateMovable(): void;
    
            /**
             * Set whether this block is movable or not.
             * @param {boolean} movable True if movable.
             */
            setMovable(movable: boolean): void;
    
            /**
             * Set whether this block is editable or not.
             * @param {boolean} editable True if editable.
             */
            setEditable(editable: boolean): void;
    
            /**
             * Set whether this block is a shadow block or not.
             * @param {boolean} shadow True if a shadow.
             */
            setShadow(shadow: boolean): void;
    
            /**
             * Return the root node of the SVG or null if none exists.
             * @return {Element} The root SVG node (probably a group).
             */
            getSvgRoot(): Element;
    
            /**
             * Dispose of this block.
             * @param {boolean} healStack If true, then try to heal any gap by connecting
             *     the next statement with the previous statement.  Otherwise, dispose of
             *     all children of this block.
             * @param {boolean} animate If true, show a disposal animation and sound.
             */
            dispose(healStack: boolean, animate: boolean): void;
    
            /**
             * Play some UI effects (sound, animation) when disposing of a block.
             */
            disposeUiEffect(): void;
    
            /**
             * Play some UI effects (sound, ripple) after a connection has been established.
             */
            connectionUiEffect(): void;
    
            /**
             * Play some UI effects (sound, animation) when disconnecting a block.
             */
            disconnectUiEffect(): void;
    
            /**
             * Change the colour of a block.
             */
            updateColour(): void;
    
            /**
             * Enable or disable a block.
             */
            updateDisabled(): void;
    
            /**
             * Returns the comment on this block (or '' if none).
             * @return {string} Block's comment.
             */
            getCommentText(): string;
    
            /**
             * Set this block's comment text.
             * @param {?string} text The text, or null to delete.
             */
            setCommentText(text: string): void;
    
            /**
             * Set this block's warning text.
             * @param {?string} text The text, or null to delete.
             * @param {string=} opt_id An optional ID for the warning text to be able to
             *     maintain multiple warnings.
             */
            setWarningText(text: string, opt_id?: string): void;
    
            /**
             * Give this block a mutator dialog.
             * @param {Blockly.Mutator} mutator A mutator dialog instance or null to remove.
             */
            setMutator(mutator: Blockly.Mutator): void;
    
            /**
             * Set whether the block is disabled or not.
             * @param {boolean} disabled True if disabled.
             */
            setDisabled(disabled: boolean): void;
    
            /**
             * Set whether the block is highlighted or not.  Block highlighting is
             * often used to visually mark blocks currently being executed.
             * @param {boolean} highlighted True if highlighted.
             */
            setHighlighted(highlighted: boolean): void;
    
            /**
             * Select this block.  Highlight it visually.
             */
            addSelect(): void;
    
            /**
             * Unselect this block.  Remove its highlighting.
             */
            removeSelect(): void;
    
            /**
             * Update the cursor over this block by adding or removing a class.
             * @param {boolean} enable True if the delete cursor should be shown, false
             *     otherwise.
             * @package
             */
            setDeleteStyle(enable: boolean): void;
    
            /**
             * Change the colour of a block.
             * @param {number|string} colour HSV hue value, or #RRGGBB string.
             */
            setColour(colour: number|string): void;
    
            /**
             * Move this block to the front of the visible workspace.
             * <g> tags do not respect z-index so SVG renders them in the
             * order that they are in the DOM.  By placing this block first within the
             * block group's <g>, it will render on top of any other blocks.
             * @package
             */
            bringToFront(): void;
    
            /**
             * Set whether this block can chain onto the bottom of another block.
             * @param {boolean} newBoolean True if there can be a previous statement.
             * @param {(string|Array.<string>|null)=} opt_check Statement type or
             *     list of statement types.  Null/undefined if any type could be connected.
             */
            setPreviousStatement(newBoolean: boolean, opt_check?: string|string[]|any /*null*/): void;
    
            /**
             * Set whether another block can chain onto the bottom of this block.
             * @param {boolean} newBoolean True if there can be a next statement.
             * @param {(string|Array.<string>|null)=} opt_check Statement type or
             *     list of statement types.  Null/undefined if any type could be connected.
             */
            setNextStatement(newBoolean: boolean, opt_check?: string|string[]|any /*null*/): void;
    
            /**
             * Set whether this block returns a value.
             * @param {boolean} newBoolean True if there is an output.
             * @param {(string|Array.<string>|null)=} opt_check Returned type or list
             *     of returned types.  Null or undefined if any type could be returned
             *     (e.g. variable get).
             */
            setOutput(newBoolean: boolean, opt_check?: string|string[]|any /*null*/): void;
    
            /**
             * Set whether value inputs are arranged horizontally or vertically.
             * @param {boolean} newBoolean True if inputs are horizontal.
             */
            setInputsInline(newBoolean: boolean): void;
    
            /**
             * Remove an input from this block.
             * @param {string} name The name of the input.
             * @param {boolean=} opt_quiet True to prevent error if input is not present.
             * @throws {goog.asserts.AssertionError} if the input is not present and
             *     opt_quiet is not true.
             */
            removeInput(name: string, opt_quiet?: boolean): void;
    
            /**
             * Move a numbered input to a different location on this block.
             * @param {number} inputIndex Index of the input to move.
             * @param {number} refIndex Index of input that should be after the moved input.
             */
            moveNumberedInputBefore(inputIndex: number, refIndex: number): void;
    
            /**
             * Add a value input, statement input or local variable to this block.
             * @param {number} type Either Blockly.INPUT_VALUE or Blockly.NEXT_STATEMENT or
             *     Blockly.DUMMY_INPUT.
             * @param {string} name Language-neutral identifier which may used to find this
             *     input again.  Should be unique to this block.
             * @return {!Blockly.Input} The input object created.
             * @private
             */
            appendInput_(type: number, name: string): Blockly.Input;
    
            /**
             * Returns connections originating from this block.
             * @param {boolean} all If true, return all connections even hidden ones.
             *     Otherwise, for a non-rendered block return an empty list, and for a
             *     collapsed block don't return inputs connections.
             * @return {!Array.<!Blockly.Connection>} Array of connections.
             * @package
             */
            getConnections_(all: boolean): Blockly.Connection[];
    
            /**
             * Create a connection of the specified type.
             * @param {number} type The type of the connection to create.
             * @return {!Blockly.RenderedConnection} A new connection of the specified type.
             * @private
             */
            makeConnection_(type: number): Blockly.RenderedConnection;
    
            /**
             * Bump unconnected blocks out of alignment.  Two blocks which aren't actually
             * connected should not coincidentally line up on screen.
             * @private
             */
            bumpNeighbours_(): void;
    
            /**
             * Schedule snapping to grid and bumping neighbours to occur after a brief
             * delay.
             * @package
             */
            scheduleSnapAndBump(): void;
    } 
    
}

declare module Blockly.BlockSvg {

    /**
     * Constant for identifying rows that are to be rendered inline.
     * Don't collide with Blockly.INPUT_VALUE and friends.
     * @const
     */
    var INLINE: any /*missing*/;

    /**
     * Animate a cloned block and eventually dispose of it.
     * This is a class method, not an instance method since the original block has
     * been destroyed and is no longer accessible.
     * @param {!Element} clone SVG element to animate and dispose of.
     * @param {boolean} rtl True if RTL, false if LTR.
     * @param {!Date} start Date of animation's start.
     * @param {number} workspaceScale Scale of workspace.
     * @private
     */
    function disposeUiStep_(clone: Element, rtl: boolean, start: Date, workspaceScale: number): void;

    /**
     * Expand a ripple around a connection.
     * @param {!Element} ripple Element to animate.
     * @param {!Date} start Date of animation's start.
     * @param {number} workspaceScale Scale of workspace.
     * @private
     */
    function connectionUiStep_(ripple: Element, start: Date, workspaceScale: number): void;

    /**
     * Animate a brief wiggle of a disconnected block.
     * @param {!Element} group SVG element to animate.
     * @param {number} magnitude Maximum degrees skew (reversed for RTL).
     * @param {!Date} start Date of animation's start.
     * @private
     */
    function disconnectUiStep_(group: Element, magnitude: number, start: Date): void;

    /**
     * Stop the disconnect UI animation immediately.
     * @private
     */
    function disconnectUiStop_(): void;
}

declare module Blockly.BlockSvg.disconnectUiStop_ {

    /**
     * PID of disconnect UI animation.  There can only be one at a time.
     * @type {number}
     */
    var pid: number;

    /**
     * SVG group of wobbling block.  There can only be one at a time.
     * @type {Element}
     */
    var group: Element;
}

declare module Blockly {

    /**
     * The main workspace most recently used.
     * Set by Blockly.WorkspaceSvg.prototype.markFocused
     * @type {Blockly.Workspace}
     */
    var mainWorkspace: Blockly.Workspace;

    /**
     * Currently selected block.
     * @type {Blockly.Block}
     */
    var selected: Blockly.Block;

    /**
     * All of the connections on blocks that are currently being dragged.
     * @type {!Array.<!Blockly.Connection>}
     * @private
     */
    var draggingConnections_: Blockly.Connection[];

    /**
     * Contents of the local clipboard.
     * @type {Element}
     * @private
     */
    var clipboardXml_: Element;

    /**
     * Source of the local clipboard.
     * @type {Blockly.WorkspaceSvg}
     * @private
     */
    var clipboardSource_: Blockly.WorkspaceSvg;

    /**
     * Cached value for whether 3D is supported.
     * @type {!boolean}
     * @private
     */
    var cache3dSupported_: boolean;

    /**
     * Convert a hue (HSV model) into an RGB hex triplet.
     * @param {number} hue Hue on a colour wheel (0-360).
     * @return {string} RGB code, e.g. '#5ba65b'.
     */
    function hueToRgb(hue: number): string;

    /**
     * Returns the dimensions of the specified SVG image.
     * @param {!Element} svg SVG image.
     * @return {!Object} Contains width and height properties.
     */
    function svgSize(svg: Element): Object;

    /**
     * Size the workspace when the contents change.  This also updates
     * scrollbars accordingly.
     * @param {!Blockly.WorkspaceSvg} workspace The workspace to resize.
     */
    function resizeSvgContents(workspace: Blockly.WorkspaceSvg): void;

    /**
     * Size the SVG image to completely fill its container. Call this when the view
     * actually changes sizes (e.g. on a window resize/device orientation change).
     * See Blockly.resizeSvgContents to resize the workspace when the contents
     * change (e.g. when a block is added or removed).
     * Record the height/width of the SVG image.
     * @param {!Blockly.WorkspaceSvg} workspace Any workspace in the SVG.
     */
    function svgResize(workspace: Blockly.WorkspaceSvg): void;

    /**
     * Handle a key-down on SVG drawing surface.
     * @param {!Event} e Key down event.
     * @private
     */
    function onKeyDown_(e: Event): void;

    /**
     * Copy a block onto the local clipboard.
     * @param {!Blockly.Block} block Block to be copied.
     * @private
     */
    function copy_(block: Blockly.Block): void;

    /**
     * Duplicate this block and its children.
     * @param {!Blockly.Block} block Block to be copied.
     * @private
     */
    function duplicate_(block: Blockly.Block): void;

    /**
     * Cancel the native context menu, unless the focus is on an HTML input widget.
     * @param {!Event} e Mouse down event.
     * @private
     */
    function onContextMenu_(e: Event): void;

    /**
     * Close tooltips, context menus, dropdown selections, etc.
     * @param {boolean=} opt_allowToolbox If true, don't close the toolbox.
     */
    function hideChaff(opt_allowToolbox?: boolean): void;

    /**
     * When something in Blockly's workspace changes, call a function.
     * @param {!Function} func Function to call.
     * @return {!Array.<!Array>} Opaque data that can be passed to
     *     removeChangeListener.
     * @deprecated April 2015
     */
    function addChangeListener(func: Function): any[][];

    /**
     * Returns the main workspace.  Returns the last used main workspace (based on
     * focus).  Try not to use this function, particularly if there are multiple
     * Blockly instances on a page.
     * @return {!Blockly.Workspace} The main workspace.
     */
    function getMainWorkspace(): Blockly.Workspace;

    /**
     * Wrapper to window.alert() that app developers may override to
     * provide alternatives to the modal browser window.
     * @param {string} message The message to display to the user.
     * @param {function()=} opt_callback The callback when the alert is dismissed.
     */
    function alert(message: string, opt_callback?: { (): any /*missing*/ }): void;

    /**
     * Wrapper to window.confirm() that app developers may override to
     * provide alternatives to the modal browser window.
     * @param {string} message The message to display to the user.
     * @param {!function(boolean)} callback The callback for handling user response.
     */
    function confirm(message: string, callback: { (_0: boolean): any /*missing*/ }): void;

    /**
     * Wrapper to window.prompt() that app developers may override to provide
     * alternatives to the modal browser window. Built-in browser prompts are
     * often used for better text input experience on mobile device. We strongly
     * recommend testing mobile when overriding this.
     * @param {string} message The message to display to the user.
     * @param {string} defaultValue The value to initialize the prompt with.
     * @param {!function(string)} callback The callback for handling user response.
     */
    function prompt(message: string, defaultValue: string, callback: { (_0: string): any /*missing*/ }): void;

    /**
     * Helper function for defining a block from JSON.  The resulting function has
     * the correct value of jsonDef at the point in code where jsonInit is called.
     * @param {!Object} jsonDef The JSON definition of a block.
     * @return {function()} A function that calls jsonInit with the correct value
     *     of jsonDef.
     * @private
     */
    function jsonInitFactory_(jsonDef: Object): { (): any /*missing*/ };

    /**
     * Define blocks from an array of JSON block definitions, as might be generated
     * by the Blockly Developer Tools.
     * @param {!Array.<!Object>} jsonArray An array of JSON block definitions.
     */
    function defineBlocksWithJsonArray(jsonArray: Object[]): void;

    /**
     * Bind an event to a function call.  When calling the function, verifies that
     * it belongs to the touch stream that is currently being processed, and splits
     * multitouch events into multiple events as needed.
     * @param {!EventTarget} node Node upon which to listen.
     * @param {string} name Event name to listen to (e.g. 'mousedown').
     * @param {Object} thisObject The value of 'this' in the function.
     * @param {!Function} func Function to call when event is triggered.
     * @param {boolean=} opt_noCaptureIdentifier True if triggering on this event
     *     should not block execution of other event handlers on this touch or other
     *     simultaneous touches.
     * @param {boolean=} opt_noPreventDefault True if triggering on this event
     *     should prevent the default handler.  False by default.  If
     *     opt_noPreventDefault is provided, opt_noCaptureIdentifier must also be
     *     provided.
     * @return {!Array.<!Array>} Opaque data that can be passed to unbindEvent_.
     * @private
     */
    function bindEventWithChecks_(node: EventTarget, name: string, thisObject: Object, func: Function, opt_noCaptureIdentifier?: boolean, opt_noPreventDefault?: boolean): any[][];

    /**
     * Bind an event to a function call.  Handles multitouch events by using the
     * coordinates of the first changed touch, and doesn't do any safety checks for
     * simultaneous event processing.
     * @deprecated in favor of bindEventWithChecks_, but preserved for external
     * users.
     * @param {!EventTarget} node Node upon which to listen.
     * @param {string} name Event name to listen to (e.g. 'mousedown').
     * @param {Object} thisObject The value of 'this' in the function.
     * @param {!Function} func Function to call when event is triggered.
     * @return {!Array.<!Array>} Opaque data that can be passed to unbindEvent_.
     * @private
     */
    function bindEvent_(node: EventTarget, name: string, thisObject: Object, func: Function): any[][];

    /**
     * Unbind one or more events event from a function call.
     * @param {!Array.<!Array>} bindData Opaque data from bindEvent_.
     *     This list is emptied during the course of calling this function.
     * @return {!Function} The function call.
     * @private
     */
    function unbindEvent_(bindData: any[][]): Function;

    /**
     * Is the given string a number (includes negative and decimals).
     * @param {string} str Input string.
     * @return {boolean} True if number, false otherwise.
     */
    function isNumber(str: string): boolean;
}

declare module Blockly {

    class Bubble extends Bubble__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Bubble__Class  { 
    
            /**
             * Class for UI bubble.
             * @param {!Blockly.WorkspaceSvg} workspace The workspace on which to draw the
             *     bubble.
             * @param {!Element} content SVG content for the bubble.
             * @param {Element} shape SVG element to avoid eclipsing.
             * @param {!goog.math.Coodinate} anchorXY Absolute position of bubble's anchor
             *     point.
             * @param {?number} bubbleWidth Width of bubble, or null if not resizable.
             * @param {?number} bubbleHeight Height of bubble, or null if not resizable.
             * @constructor
             */
            constructor(workspace: Blockly.WorkspaceSvg, content: Element, shape: Element, anchorXY: goog.math.Coodinate, bubbleWidth: number, bubbleHeight: number);
    
            /**
             * Function to call on resize of bubble.
             * @type {Function}
             */
            resizeCallback_: Function;
    
            /**
             * Flag to stop incremental rendering during construction.
             * @private
             */
            rendered_: any /*missing*/;
    
            /**
             * Absolute coordinate of anchor point.
             * @type {goog.math.Coordinate}
             * @private
             */
            anchorXY_: goog.math.Coordinate;
    
            /**
             * Relative X coordinate of bubble with respect to the anchor's centre.
             * In RTL mode the initial value is negated.
             * @private
             */
            relativeLeft_: any /*missing*/;
    
            /**
             * Relative Y coordinate of bubble with respect to the anchor's centre.
             * @private
             */
            relativeTop_: any /*missing*/;
    
            /**
             * Width of bubble.
             * @private
             */
            width_: any /*missing*/;
    
            /**
             * Height of bubble.
             * @private
             */
            height_: any /*missing*/;
    
            /**
             * Automatically position and reposition the bubble.
             * @private
             */
            autoLayout_: any /*missing*/;
    
            /**
             * Create the bubble's DOM.
             * @param {!Element} content SVG content for the bubble.
             * @param {boolean} hasResize Add diagonal resize gripper if true.
             * @return {!Element} The bubble's SVG group.
             * @private
             */
            createDom_(content: Element, hasResize: boolean): Element;
    
            /**
             * Handle a mouse-down on bubble's border.
             * @param {!Event} e Mouse down event.
             * @private
             */
            bubbleMouseDown_(e: Event): void;
    
            /**
             * Drag this bubble to follow the mouse.
             * @param {!Event} e Mouse move event.
             * @private
             */
            bubbleMouseMove_(e: Event): void;
    
            /**
             * Handle a mouse-down on bubble's resize corner.
             * @param {!Event} e Mouse down event.
             * @private
             */
            resizeMouseDown_(e: Event): void;
    
            /**
             * Resize this bubble to follow the mouse.
             * @param {!Event} e Mouse move event.
             * @private
             */
            resizeMouseMove_(e: Event): void;
    
            /**
             * Register a function as a callback event for when the bubble is resized.
             * @param {!Function} callback The function to call on resize.
             */
            registerResizeEvent(callback: Function): void;
    
            /**
             * Move this bubble to the top of the stack.
             * @private
             */
            promote_(): void;
    
            /**
             * Notification that the anchor has moved.
             * Update the arrow and bubble accordingly.
             * @param {!goog.math.Coordinate} xy Absolute location.
             */
            setAnchorLocation(xy: goog.math.Coordinate): void;
    
            /**
             * Position the bubble so that it does not fall off-screen.
             * @private
             */
            layoutBubble_(): void;
    
            /**
             * Move the bubble to a location relative to the anchor's centre.
             * @private
             */
            positionBubble_(): void;
    
            /**
             * Get the dimensions of this bubble.
             * @return {!Object} Object with width and height properties.
             */
            getBubbleSize(): Object;
    
            /**
             * Size this bubble.
             * @param {number} width Width of the bubble.
             * @param {number} height Height of the bubble.
             */
            setBubbleSize(width: number, height: number): void;
    
            /**
             * Draw the arrow between the bubble and the origin.
             * @private
             */
            renderArrow_(): void;
    
            /**
             * Change the colour of a bubble.
             * @param {string} hexColour Hex code of colour.
             */
            setColour(hexColour: string): void;
    
            /**
             * Dispose of this bubble.
             */
            dispose(): void;
    } 
    
}

declare module Blockly.Bubble {

    /**
     * Width of the border around the bubble.
     */
    var BORDER_WIDTH: any /*missing*/;

    /**
     * Determines the thickness of the base of the arrow in relation to the size
     * of the bubble.  Higher numbers result in thinner arrows.
     */
    var ARROW_THICKNESS: any /*missing*/;

    /**
     * The number of degrees that the arrow bends counter-clockwise.
     */
    var ARROW_ANGLE: any /*missing*/;

    /**
     * The sharpness of the arrow's bend.  Higher numbers result in smoother arrows.
     */
    var ARROW_BEND: any /*missing*/;

    /**
     * Distance between arrow point and anchor point.
     */
    var ANCHOR_RADIUS: any /*missing*/;

    /**
     * Wrapper function called when a mouseUp occurs during a drag operation.
     * @type {Array.<!Array>}
     * @private
     */
    var onMouseUpWrapper_: any[][];

    /**
     * Wrapper function called when a mouseMove occurs during a drag operation.
     * @type {Array.<!Array>}
     * @private
     */
    var onMouseMoveWrapper_: any[][];

    /**
     * Stop binding to the global mouseup and mousemove events.
     * @private
     */
    function unbindDragEvents_(): void;
}

declare module Blockly {

    class Comment extends Comment__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Comment__Class extends Blockly.Icon__Class  { 
    
            /**
             * Class for a comment.
             * @param {!Blockly.Block} block The block associated with this comment.
             * @extends {Blockly.Icon}
             * @constructor
             */
            constructor(block: Blockly.Block);
    
            /**
             * Comment text (if bubble is not visible).
             * @private
             */
            text_: any /*missing*/;
    
            /**
             * Width of bubble.
             * @private
             */
            width_: any /*missing*/;
    
            /**
             * Height of bubble.
             * @private
             */
            height_: any /*missing*/;
    
            /**
             * Draw the comment icon.
             * @param {!Element} group The icon group.
             * @private
             */
            drawIcon_(group: Element): void;
    
            /**
             * Create the editor for the comment's bubble.
             * @return {!Element} The top-level node of the editor.
             * @private
             */
            createEditor_(): Element;
    
            /**
             * Callback function triggered when the bubble has resized.
             * Resize the text area accordingly.
             * @private
             */
            resizeBubble_(): void;
    
            /**
             * Show or hide the comment bubble.
             * @param {boolean} visible True if the bubble should be visible.
             */
            setVisible(visible: boolean): void;
    
            /**
             * Bring the comment to the top of the stack when clicked on.
             * @param {!Event} e Mouse up event.
             * @private
             */
            textareaFocus_(e: Event): void;
    
            /**
             * Get the dimensions of this comment's bubble.
             * @return {!Object} Object with width and height properties.
             */
            getBubbleSize(): Object;
    
            /**
             * Size this comment's bubble.
             * @param {number} width Width of the bubble.
             * @param {number} height Height of the bubble.
             */
            setBubbleSize(width: number, height: number): void;
    
            /**
             * Returns this comment's text.
             * @return {string} Comment text.
             */
            getText(): string;
    
            /**
             * Set this comment's text.
             * @param {string} text Comment text.
             */
            setText(text: string): void;
    
            /**
             * Dispose of this comment.
             */
            dispose(): void;
    } 
    
}

declare module Blockly {

    class Connection extends Connection__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Connection__Class  { 
    
            /**
             * Class for a connection between blocks.
             * @param {!Blockly.Block} source The block establishing this connection.
             * @param {number} type The type of the connection.
             * @constructor
             */
            constructor(source: Blockly.Block, type: number);
    
            /**
             * @type {!Blockly.Block}
             * @private
             */
            sourceBlock_: Blockly.Block;
    
            /** @type {number} */
            type: number;
    
            /**
             * Connection this connection connects to.  Null if not connected.
             * @type {Blockly.Connection}
             */
            targetConnection: Blockly.Connection;
    
            /**
             * List of compatible value types.  Null if all types are compatible.
             * @type {Array}
             * @private
             */
            check_: any[];
    
            /**
             * DOM representation of a shadow block, or null if none.
             * @type {Element}
             * @private
             */
            shadowDom_: Element;
    
            /**
             * Horizontal location of this connection.
             * @type {number}
             * @private
             */
            x_: number;
    
            /**
             * Vertical location of this connection.
             * @type {number}
             * @private
             */
            y_: number;
    
            /**
             * Has this connection been added to the connection database?
             * @type {boolean}
             * @private
             */
            inDB_: boolean;
    
            /**
             * Connection database for connections of this type on the current workspace.
             * @type {Blockly.ConnectionDB}
             * @private
             */
            db_: Blockly.ConnectionDB;
    
            /**
             * Connection database for connections compatible with this type on the
             * current workspace.
             * @type {Blockly.ConnectionDB}
             * @private
             */
            dbOpposite_: Blockly.ConnectionDB;
    
            /**
             * Whether this connections is hidden (not tracked in a database) or not.
             * @type {boolean}
             * @private
             */
            hidden_: boolean;
    
            /**
             * Connect two connections together.  This is the connection on the superior
             * block.
             * @param {!Blockly.Connection} childConnection Connection on inferior block.
             * @private
             */
            connect_(childConnection: Blockly.Connection): void;
    
            /**
             * Sever all links to this connection (not including from the source object).
             */
            dispose(): void;
    
            /**
             * Get the source block for this connection.
             * @return {Blockly.Block} The source block, or null if there is none.
             */
            getSourceBlock(): Blockly.Block;
    
            /**
             * Does the connection belong to a superior block (higher in the source stack)?
             * @return {boolean} True if connection faces down or right.
             */
            isSuperior(): boolean;
    
            /**
             * Is the connection connected?
             * @return {boolean} True if connection is connected to another connection.
             */
            isConnected(): boolean;
    
            /**
             * Checks whether the current connection can connect with the target
             * connection.
             * @param {Blockly.Connection} target Connection to check compatibility with.
             * @return {number} Blockly.Connection.CAN_CONNECT if the connection is legal,
             *    an error code otherwise.
             * @private
             */
            canConnectWithReason_(target: Blockly.Connection): number;
    
            /**
             * Checks whether the current connection and target connection are compatible
             * and throws an exception if they are not.
             * @param {Blockly.Connection} target The connection to check compatibility
             *    with.
             * @private
             */
            checkConnection_(target: Blockly.Connection): void;
    
            /**
             * Check if the two connections can be dragged to connect to each other.
             * @param {!Blockly.Connection} candidate A nearby connection to check.
             * @return {boolean} True if the connection is allowed, false otherwise.
             */
            isConnectionAllowed(candidate: Blockly.Connection): boolean;
    
            /**
             * Connect this connection to another connection.
             * @param {!Blockly.Connection} otherConnection Connection to connect to.
             */
            connect(otherConnection: Blockly.Connection): void;
    
            /**
             * Disconnect this connection.
             */
            disconnect(): void;
    
            /**
             * Disconnect two blocks that are connected by this connection.
             * @param {!Blockly.Block} parentBlock The superior block.
             * @param {!Blockly.Block} childBlock The inferior block.
             * @private
             */
            disconnectInternal_(parentBlock: Blockly.Block, childBlock: Blockly.Block): void;
    
            /**
             * Respawn the shadow block if there was one connected to the this connection.
             * @private
             */
            respawnShadow_(): void;
    
            /**
             * Returns the block that this connection connects to.
             * @return {Blockly.Block} The connected block or null if none is connected.
             */
            targetBlock(): Blockly.Block;
    
            /**
             * Is this connection compatible with another connection with respect to the
             * value type system.  E.g. square_root("Hello") is not compatible.
             * @param {!Blockly.Connection} otherConnection Connection to compare against.
             * @return {boolean} True if the connections share a type.
             * @private
             */
            checkType_(otherConnection: Blockly.Connection): boolean;
    
            /**
             * Function to be called when this connection's compatible types have changed.
             * @private
             */
            onCheckChanged_(): void;
    
            /**
             * Change a connection's compatibility.
             * @param {*} check Compatible value type or list of value types.
             *     Null if all types are compatible.
             * @return {!Blockly.Connection} The connection being modified
             *     (to allow chaining).
             */
            setCheck(check: any): Blockly.Connection;
    
            /**
             * Change a connection's shadow block.
             * @param {Element} shadow DOM representation of a block or null.
             */
            setShadowDom(shadow: Element): void;
    
            /**
             * Return a connection's shadow block.
             * @return {Element} shadow DOM representation of a block or null.
             */
            getShadowDom(): Element;
    
            /**
             * Find all nearby compatible connections to this connection.
             * Type checking does not apply, since this function is used for bumping.
             *
             * Headless configurations (the default) do not have neighboring connection,
             * and always return an empty list (the default).
             * {@link Blockly.RenderedConnection} overrides this behavior with a list
             * computed from the rendered positioning.
             * @param {number} maxLimit The maximum radius to another connection.
             * @return {!Array.<!Blockly.Connection>} List of connections.
             * @private
             */
            neighbours_(): Blockly.Connection[];
    
            /**
             * This method returns a string describing this Connection in developer terms
             * (English only). Intended to on be used in console logs and errors.
             * @return {string} The description.
             */
            toString(): string;
    } 
    
}

declare module Blockly.Connection {

    /**
     * Constants for checking whether two connections are compatible.
     */
    var CAN_CONNECT: any /*missing*/;

    /**
     * Update two connections to target each other.
     * @param {Blockly.Connection} first The first connection to update.
     * @param {Blockly.Connection} second The second connection to update.
     * @private
     */
    function connectReciprocally_(first: Blockly.Connection, second: Blockly.Connection): void;

    /**
     * Does the given block have one and only one connection point that will accept
     * an orphaned block?
     * @param {!Blockly.Block} block The superior block.
     * @param {!Blockly.Block} orphanBlock The inferior block.
     * @return {Blockly.Connection} The suitable connection point on 'block',
     *     or null.
     * @private
     */
    function singleConnection_(block: Blockly.Block, orphanBlock: Blockly.Block): Blockly.Connection;

    /**
     * Walks down a row a blocks, at each stage checking if there are any
     * connections that will accept the orphaned block.  If at any point there
     * are zero or multiple eligible connections, returns null.  Otherwise
     * returns the only input on the last block in the chain.
     * Terminates early for shadow blocks.
     * @param {!Blockly.Block} startBlock The block on which to start the search.
     * @param {!Blockly.Block} orphanBlock The block that is looking for a home.
     * @return {Blockly.Connection} The suitable connection point on the chain
     *    of blocks, or null.
     * @private
     */
    function lastConnectionInRow_(startBlock: Blockly.Block, orphanBlock: Blockly.Block): Blockly.Connection;
}

declare module Blockly {

    class ConnectionDB extends ConnectionDB__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ConnectionDB__Class  { 
    
            /**
             * Database of connections.
             * Connections are stored in order of their vertical component.  This way
             * connections in an area may be looked up quickly using a binary search.
             * @constructor
             */
            constructor();
    
            /**
             * Add a connection to the database.  Must not already exist in DB.
             * @param {!Blockly.Connection} connection The connection to be added.
             */
            addConnection(connection: Blockly.Connection): void;
    
            /**
             * Find the given connection.
             * Starts by doing a binary search to find the approximate location, then
             *     linearly searches nearby for the exact connection.
             * @param {!Blockly.Connection} conn The connection to find.
             * @return {number} The index of the connection, or -1 if the connection was
             *     not found.
             */
            findConnection(conn: Blockly.Connection): number;
    
            /**
             * Finds a candidate position for inserting this connection into the list.
             * This will be in the correct y order but makes no guarantees about ordering in
             *     the x axis.
             * @param {!Blockly.Connection} connection The connection to insert.
             * @return {number} The candidate index.
             * @private
             */
            findPositionForConnection_(connection: Blockly.Connection): number;
    
            /**
             * Remove a connection from the database.  Must already exist in DB.
             * @param {!Blockly.Connection} connection The connection to be removed.
             * @private
             */
            removeConnection_(connection: Blockly.Connection): void;
    
            /**
             * Find all nearby connections to the given connection.
             * Type checking does not apply, since this function is used for bumping.
             * @param {!Blockly.Connection} connection The connection whose neighbours
             *     should be returned.
             * @param {number} maxRadius The maximum radius to another connection.
             * @return {!Array.<Blockly.Connection>} List of connections.
             */
            getNeighbours(connection: Blockly.Connection, maxRadius: number): Blockly.Connection[];
    
            /**
             * Is the candidate connection close to the reference connection.
             * Extremely fast; only looks at Y distance.
             * @param {number} index Index in database of candidate connection.
             * @param {number} baseY Reference connection's Y value.
             * @param {number} maxRadius The maximum radius to another connection.
             * @return {boolean} True if connection is in range.
             * @private
             */
            isInYRange_(index: number, baseY: number, maxRadius: number): boolean;
    
            /**
             * Find the closest compatible connection to this connection.
             * @param {!Blockly.Connection} conn The connection searching for a compatible
             *     mate.
             * @param {number} maxRadius The maximum radius to another connection.
             * @param {!goog.math.Coordinate} dxy Offset between this connection's location
             *     in the database and the current location (as a result of dragging).
             * @return {!{connection: ?Blockly.Connection, radius: number}} Contains two
             *     properties:' connection' which is either another connection or null,
             *     and 'radius' which is the distance.
             */
            searchForClosest(conn: Blockly.Connection, maxRadius: number, dxy: goog.math.Coordinate): { connection: Blockly.Connection; radius: number };
    } 
    
}

declare module Blockly.ConnectionDB {

    /**
     * Don't inherit the constructor from Array.
     * @type {!Function}
     */
    var constructor: Function;

    /**
     * Initialize a set of connection DBs for a specified workspace.
     * @param {!Blockly.Workspace} workspace The workspace this DB is for.
     */
    function init(workspace: Blockly.Workspace): void;
}

declare module Blockly {

    /**
     * Number of pixels the mouse must move before a drag starts.
     */
    var DRAG_RADIUS: any /*missing*/;

    /**
     * Number of pixels the mouse must move before a drag/scroll starts from the
     * flyout.  Because the drag-intention is determined when this is reached, it is
     * larger than Blockly.DRAG_RADIUS so that the drag-direction is clearer.
     */
    var FLYOUT_DRAG_RADIUS: any /*missing*/;

    /**
     * Maximum misalignment between connections for them to snap together.
     */
    var SNAP_RADIUS: any /*missing*/;

    /**
     * Delay in ms between trigger and bumping unconnected block out of alignment.
     */
    var BUMP_DELAY: any /*missing*/;

    /**
     * Number of characters to truncate a collapsed block to.
     */
    var COLLAPSE_CHARS: any /*missing*/;

    /**
     * Length in ms for a touch to become a long press.
     */
    var LONGPRESS: any /*missing*/;

    /**
     * Prevent a sound from playing if another sound preceded it within this many
     * milliseconds.
     */
    var SOUND_LIMIT: any /*missing*/;

    /**
     * When dragging a block out of a stack, split the stack in two (true), or drag
     * out the block healing the stack (false).
     */
    var DRAG_STACK: any /*missing*/;

    /**
     * The richness of block colours, regardless of the hue.
     * Must be in the range of 0 (inclusive) to 1 (exclusive).
     */
    var HSV_SATURATION: any /*missing*/;

    /**
     * The intensity of block colours, regardless of the hue.
     * Must be in the range of 0 (inclusive) to 1 (exclusive).
     */
    var HSV_VALUE: any /*missing*/;

    /**
     * Sprited icons and images.
     */
    var SPRITE: any /*missing*/;

    /**
     * Required name space for SVG elements.
     * @const
     */
    var SVG_NS: any /*missing*/;

    /**
     * Required name space for HTML elements.
     * @const
     */
    var HTML_NS: any /*missing*/;

    /**
     * ENUM for a right-facing value input.  E.g. 'set item to' or 'return'.
     * @const
     */
    var INPUT_VALUE: any /*missing*/;

    /**
     * ENUM for a left-facing value output.  E.g. 'random fraction'.
     * @const
     */
    var OUTPUT_VALUE: any /*missing*/;

    /**
     * ENUM for a down-facing block stack.  E.g. 'if-do' or 'else'.
     * @const
     */
    var NEXT_STATEMENT: any /*missing*/;

    /**
     * ENUM for an up-facing block stack.  E.g. 'break out of loop'.
     * @const
     */
    var PREVIOUS_STATEMENT: any /*missing*/;

    /**
     * ENUM for an dummy input.  Used to add field(s) with no input.
     * @const
     */
    var DUMMY_INPUT: any /*missing*/;

    /**
     * ENUM for left alignment.
     * @const
     */
    var ALIGN_LEFT: any /*missing*/;

    /**
     * ENUM for centre alignment.
     * @const
     */
    var ALIGN_CENTRE: any /*missing*/;

    /**
     * ENUM for right alignment.
     * @const
     */
    var ALIGN_RIGHT: any /*missing*/;

    /**
     * ENUM for no drag operation.
     * @const
     */
    var DRAG_NONE: any /*missing*/;

    /**
     * ENUM for inside the sticky DRAG_RADIUS.
     * @const
     */
    var DRAG_STICKY: any /*missing*/;

    /**
     * ENUM for inside the non-sticky DRAG_RADIUS, for differentiating between
     * clicks and drags.
     * @const
     */
    var DRAG_BEGIN: any /*missing*/;

    /**
     * ENUM for freely draggable (outside the DRAG_RADIUS, if one applies).
     * @const
     */
    var DRAG_FREE: any /*missing*/;

    /**
     * Lookup table for determining the opposite type of a connection.
     * @const
     */
    var OPPOSITE_TYPE: any /*missing*/;

    /**
     * ENUM for toolbox and flyout at top of screen.
     * @const
     */
    var TOOLBOX_AT_TOP: any /*missing*/;

    /**
     * ENUM for toolbox and flyout at bottom of screen.
     * @const
     */
    var TOOLBOX_AT_BOTTOM: any /*missing*/;

    /**
     * ENUM for toolbox and flyout at left of screen.
     * @const
     */
    var TOOLBOX_AT_LEFT: any /*missing*/;

    /**
     * ENUM for toolbox and flyout at right of screen.
     * @const
     */
    var TOOLBOX_AT_RIGHT: any /*missing*/;

    /**
     * ENUM representing that an event is not in any delete areas.
     * Null for backwards compatibility reasons.
     * @const
     */
    var DELETE_AREA_NONE: any /*missing*/;

    /**
     * ENUM representing that an event is in the delete area of the trash can.
     * @const
     */
    var DELETE_AREA_TRASH: any /*missing*/;

    /**
     * ENUM representing that an event is in the delete area of the toolbox or
     * flyout.
     * @const
     */
    var DELETE_AREA_TOOLBOX: any /*missing*/;

    /**
     * String for use in the "custom" attribute of a category in toolbox xml.
     * This string indicates that the category should be dynamically populated with
     * variable blocks.
     * @const {string}
     */
    var VARIABLE_CATEGORY_NAME: any /*missing*/;

    /**
     * String for use in the "custom" attribute of a category in toolbox xml.
     * This string indicates that the category should be dynamically populated with
     * procedure blocks.
     * @const {string}
     */
    var PROCEDURE_CATEGORY_NAME: any /*missing*/;

    /**
     * String for use in the dropdown created in field_variable.
     * This string indicates that this option in the dropdown is 'Rename
     * variable...' and if selected, should trigger the prompt to rename a variable.
     * @const {string}
     */
    var RENAME_VARIABLE_ID: any /*missing*/;

    /**
     * String for use in the dropdown created in field_variable.
     * This string indicates that this option in the dropdown is 'Delete the "%1"
     * variable' and if selected, should trigger the prompt to delete a variable.
     * @const {string}
     */
    var DELETE_VARIABLE_ID: any /*missing*/;
}

declare module Blockly.ContextMenu {

    /**
     * Which block is the context menu attached to?
     * @type {Blockly.Block}
     */
    var currentBlock: Blockly.Block;

    /**
     * Opaque data that can be passed to unbindEvent_.
     * @type {Array.<!Array>}
     * @private
     */
    var eventWrapper_: any[][];

    /**
     * Construct the menu based on the list of options and show the menu.
     * @param {!Event} e Mouse event.
     * @param {!Array.<!Object>} options Array of menu options.
     * @param {boolean} rtl True if RTL, false if LTR.
     */
    function show(e: Event, options: Object[], rtl: boolean): void;

    /**
     * Create the context menu object and populate it with the given options.
     * @param {!Array.<!Object>} options Array of menu options.
     * @param {boolean} rtl True if RTL, false if LTR.
     * @return {!goog.ui.Menu} The menu that will be shown on right click.
     * @private
     */
    function populate_(options: Object[], rtl: boolean): goog.ui.Menu;

    /**
     * Add the menu to the page and position it correctly.
     * @param {!goog.ui.Menu} menu The menu to add and position.
     * @param {!Event} e Mouse event for the right click that is making the context
     *     menu appear.
     * @param {boolean} rtl True if RTL, false if LTR.
     * @private
     */
    function position_(menu: goog.ui.Menu, e: Event, rtl: boolean): void;

    /**
     * Create and render the menu widget inside Blockly's widget div.
     * @param {!goog.ui.Menu} menu The menu to add to the widget div.
     * @private
     */
    function createWidget_(menu: goog.ui.Menu): void;

    /**
     * Hide the context menu.
     */
    function hide(): void;

    /**
     * Create a callback function that creates and configures a block,
     *   then places the new block next to the original.
     * @param {!Blockly.Block} block Original block.
     * @param {!Element} xml XML representation of new block.
     * @return {!Function} Function that creates a block.
     */
    function callbackFactory(block: Blockly.Block, xml: Element): Function;

    /**
     * Make a context menu option for deleting the current block.
     * @param {!Blockly.BlockSvg} block The block where the right-click originated.
     * @return {!Object} A menu option, containing text, enabled, and a callback.
     * @package
     */
    function blockDeleteOption(block: Blockly.BlockSvg): Object;

    /**
     * Make a context menu option for showing help for the current block.
     * @param {!Blockly.BlockSvg} block The block where the right-click originated.
     * @return {!Object} A menu option, containing text, enabled, and a callback.
     * @package
     */
    function blockHelpOption(block: Blockly.BlockSvg): Object;

    /**
     * Make a context menu option for duplicating the current block.
     * @param {!Blockly.BlockSvg} block The block where the right-click originated.
     * @return {!Object} A menu option, containing text, enabled, and a callback.
     * @package
     */
    function blockDuplicateOption(block: Blockly.BlockSvg): Object;

    /**
     * Make a context menu option for adding or removing comments on the current
     * block.
     * @param {!Blockly.BlockSvg} block The block where the right-click originated.
     * @return {!Object} A menu option, containing text, enabled, and a callback.
     * @package
     */
    function blockCommentOption(block: Blockly.BlockSvg): Object;
}

declare module Blockly.Css {

    /**
     * List of cursors.
     * @enum {string}
     */
    enum Cursor { OPEN, CLOSED, DELETE } 

    /**
     * Current cursor (cached value).
     * @type {string}
     * @private
     */
    var currentCursor_: string;

    /**
     * Large stylesheet added by Blockly.Css.inject.
     * @type {Element}
     * @private
     */
    var styleSheet_: Element;

    /**
     * Path to media directory, with any trailing slash removed.
     * @type {string}
     * @private
     */
    var mediaPath_: string;

    /**
     * Inject the CSS into the DOM.  This is preferable over using a regular CSS
     * file since:
     * a) It loads synchronously and doesn't force a redraw later.
     * b) It speeds up loading by not blocking on a separate HTTP transfer.
     * c) The CSS content may be made dynamic depending on init options.
     * @param {boolean} hasCss If false, don't inject CSS
     *     (providing CSS becomes the document's responsibility).
     * @param {string} pathToMedia Path from page to the Blockly media directory.
     */
    function inject(hasCss: boolean, pathToMedia: string): void;

    /**
     * Set the cursor to be displayed when over something draggable.
     * See See https://github.com/google/blockly/issues/981 for context.
     * @param {Blockly.Css.Cursor} cursor Enum.
     * @deprecated April 2017.
     */
    function setCursor(cursor: Blockly.Css.Cursor): void;

    /**
     * Array making up the CSS content for Blockly.
     */
    var CONTENT: any /*missing*/;
}

declare module Blockly {

    class DraggedConnectionManager extends DraggedConnectionManager__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class DraggedConnectionManager__Class  { 
    
            /**
             * Class that controls updates to connections during drags.  It is primarily
             * responsible for finding the closest eligible connection and highlighting or
             * unhiglighting it as needed during a drag.
             * @param {!Blockly.BlockSvg} block The top block in the stack being dragged.
             * @constructor
             */
            constructor(block: Blockly.BlockSvg);
    
            /**
             * The top block in the stack being dragged.
             * Does not change during a drag.
             * @type {!Blockly.Block}
             * @private
             */
            topBlock_: Blockly.Block;
    
            /**
             * The workspace on which these connections are being dragged.
             * Does not change during a drag.
             * @type {!Blockly.WorkspaceSvg}
             * @private
             */
            workspace_: Blockly.WorkspaceSvg;
    
            /**
             * The connections on the dragging blocks that are available to connect to
             * other blocks.  This includes all open connections on the top block, as well
             * as the last connection on the block stack.
             * Does not change during a drag.
             * @type {!Array.<!Blockly.RenderedConnection>}
             * @private
             */
            availableConnections_: Blockly.RenderedConnection[];
    
            /**
             * The connection that this block would connect to if released immediately.
             * Updated on every mouse move.
             * @type {Blockly.RenderedConnection}
             * @private
             */
            closestConnection_: Blockly.RenderedConnection;
    
            /**
             * The connection that would connect to this.closestConnection_ if this block
             * were released immediately.
             * Updated on every mouse move.
             * @type {Blockly.RenderedConnection}
             * @private
             */
            localConnection_: Blockly.RenderedConnection;
    
            /**
             * The distance between this.closestConnection_ and this.localConnection_,
             * in workspace units.
             * Updated on every mouse move.
             * @type {number}
             * @private
             */
            radiusConnection_: number;
    
            /**
             * Whether the block would be deleted if it were dropped immediately.
             * Updated on every mouse move.
             * @type {boolean}
             * @private
             */
            wouldDeleteBlock_: boolean;
    
            /**
             * Sever all links from this object.
             * @package
             */
            dispose(): void;
    
            /**
             * Return whether the block would be deleted if dropped immediately, based on
             * information from the most recent move event.
             * @return {boolean} true if the block would be deleted if dropped immediately.
             * @package
             */
            wouldDeleteBlock(): boolean;
    
            /**
             * Connect to the closest connection and render the results.
             * This should be called at the end of a drag.
             * @package
             */
            applyConnections(): void;
    
            /**
             * Update highlighted connections based on the most recent move location.
             * @param {!goog.math.Coordinate} dxy Position relative to drag start,
             *     in workspace units.
             * @param {?number} deleteArea One of {@link Blockly.DELETE_AREA_TRASH},
             *     {@link Blockly.DELETE_AREA_TOOLBOX}, or {@link Blockly.DELETE_AREA_NONE}.
             * @package
             */
            update(dxy: goog.math.Coordinate, deleteArea: number): void;
    
            /**
             * Remove highlighting from the currently highlighted connection, if it exists.
             * @private
             */
            removeHighlighting_(): void;
    
            /**
             * Add highlighting to the closest connection, if it exists.
             * @private
             */
            addHighlighting_(): void;
    
            /**
             * Populate the list of available connections on this block stack.  This should
             * only be called once, at the beginning of a drag.
             * @return {!Array.<!Blockly.RenderedConnection>} a list of available
             *     connections.
             * @private
             */
            initAvailableConnections_(): Blockly.RenderedConnection[];
    
            /**
             * Find the new closest connection, and update internal state in response.
             * @param {!goog.math.Coordinate} dxy Position relative to the drag start,
             *     in workspace units.
             * @return {boolean} Whether the closest connection has changed.
             * @private
             */
            updateClosest_(dxy: goog.math.Coordinate): boolean;
    } 
    
}

declare module Blockly.Events {

    class Abstract extends Abstract__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Abstract__Class  { 
    
            /**
             * Abstract class for an event.
             * @param {Blockly.Block|Blockly.VariableModel} elem The block or variable.
             * @constructor
             */
            constructor(elem: Blockly.Block|Blockly.VariableModel);
    
            /**
             * The block id for the block this event pertains to, if appropriate for the
             * event type.
             * @type {string|undefined}
             */
            blockId: string|any /*undefined*/;
    
            /**
             * The variable id for the variable this event pertains to. Only set in
             * VarCreate, VarDelete, and VarRename events.
             * @type {string|undefined}
             */
            varId: string|any /*undefined*/;
    
            /**
             * The workspace identifier for this event.
             * @type {string|undefined}
             */
            workspaceId: string|any /*undefined*/;
    
            /**
             * The event group id for the group this event belongs to. Groups define
             * events that should be treated as an single action from the user's
             * perspective, and should be undone together.
             * @type {string}
             */
            group: string;
    
            /**
             * Sets whether the event should be added to the undo stack.
             * @type {boolean}
             */
            recordUndo: boolean;
    
            /**
             * Encode the event as JSON.
             * @return {!Object} JSON representation.
             */
            toJson(): Object;
    
            /**
             * Decode the JSON event.
             * @param {!Object} json JSON representation.
             */
            fromJson(json: Object): void;
    
            /**
             * Does this event record any change of state?
             * @return {boolean} True if null, false if something changed.
             */
            isNull(): boolean;
    
            /**
             * Run an event.
             * @param {boolean} forward True if run forward, false if run backward (undo).
             */
            run(forward: boolean): void;
    
            /**
             * Get workspace the event belongs to.
             * @return {Blockly.Workspace} The workspace the event belongs to.
             * @throws {Error} if workspace is null.
             * @private
             */
            getEventWorkspace_(): Blockly.Workspace;
    } 
    

    class Create extends Create__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Create__Class extends Blockly.Events.Abstract__Class  { 
    
            /**
             * Class for a block creation event.
             * @param {Blockly.Block} block The created block.  Null for a blank event.
             * @extends {Blockly.Events.Abstract}
             * @constructor
             */
            constructor(block: Blockly.Block);
    
            /**
             * Type of this event.
             * @type {string}
             */
            type: string;
    
            /**
             * Encode the event as JSON.
             * @return {!Object} JSON representation.
             */
            toJson(): Object;
    
            /**
             * Decode the JSON event.
             * @param {!Object} json JSON representation.
             */
            fromJson(json: Object): void;
    
            /**
             * Run a creation event.
             * @param {boolean} forward True if run forward, false if run backward (undo).
             */
            run(forward: boolean): void;
    } 
    

    class BlockCreate extends BlockCreate__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class BlockCreate__Class extends Blockly.Events.Abstract__Class  { 
    
            /**
             * Class for a block creation event.
             * @param {Blockly.Block} block The created block. Null for a blank event.
             * @extends {Blockly.Events.Abstract}
             * @constructor
             */
            constructor(block: Blockly.Block);
    } 
    

    class Delete extends Delete__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Delete__Class extends Blockly.Events.Abstract__Class  { 
    
            /**
             * Class for a block deletion event.
             * @param {Blockly.Block} block The deleted block.  Null for a blank event.
             * @extends {Blockly.Events.Abstract}
             * @constructor
             */
            constructor(block: Blockly.Block);
    
            /**
             * Type of this event.
             * @type {string}
             */
            type: string;
    
            /**
             * Encode the event as JSON.
             * @return {!Object} JSON representation.
             */
            toJson(): Object;
    
            /**
             * Decode the JSON event.
             * @param {!Object} json JSON representation.
             */
            fromJson(json: Object): void;
    
            /**
             * Run a deletion event.
             * @param {boolean} forward True if run forward, false if run backward (undo).
             */
            run(forward: boolean): void;
    } 
    

    class BlockDelete extends BlockDelete__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class BlockDelete__Class extends Blockly.Events.Abstract__Class  { 
    
            /**
             * Class for a block deletion event.
             * @param {Blockly.Block} block The deleted block.  Null for a blank event.
             * @extends {Blockly.Events.Abstract}
             * @constructor
             */
            constructor(block: Blockly.Block);
    } 
    

    class Change extends Change__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Change__Class extends Blockly.Events.Abstract__Class  { 
    
            /**
             * Class for a block change event.
             * @param {Blockly.Block} block The changed block.  Null for a blank event.
             * @param {string} element One of 'field', 'comment', 'disabled', etc.
             * @param {?string} name Name of input or field affected, or null.
             * @param {*} oldValue Previous value of element.
             * @param {*} newValue New value of element.
             * @extends {Blockly.Events.Abstract}
             * @constructor
             */
            constructor(block: Blockly.Block, element: string, name: string, oldValue: any, newValue: any);
    
            /**
             * Type of this event.
             * @type {string}
             */
            type: string;
    
            /**
             * Encode the event as JSON.
             * @return {!Object} JSON representation.
             */
            toJson(): Object;
    
            /**
             * Decode the JSON event.
             * @param {!Object} json JSON representation.
             */
            fromJson(json: Object): void;
    
            /**
             * Does this event record any change of state?
             * @return {boolean} True if something changed.
             */
            isNull(): boolean;
    
            /**
             * Run a change event.
             * @param {boolean} forward True if run forward, false if run backward (undo).
             */
            run(forward: boolean): void;
    } 
    

    class BlockChange extends BlockChange__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class BlockChange__Class extends Blockly.Events.Abstract__Class  { 
    
            /**
             * Class for a block change event.
             * @param {Blockly.Block} block The changed block.  Null for a blank event.
             * @param {string} element One of 'field', 'comment', 'disabled', etc.
             * @param {?string} name Name of input or field affected, or null.
             * @param {*} oldValue Previous value of element.
             * @param {*} newValue New value of element.
             * @extends {Blockly.Events.Abstract}
             * @constructor
             */
            constructor(block: Blockly.Block, element: string, name: string, oldValue: any, newValue: any);
    } 
    

    class Move extends Move__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Move__Class extends Blockly.Events.Abstract__Class  { 
    
            /**
             * Class for a block move event.  Created before the move.
             * @param {Blockly.Block} block The moved block.  Null for a blank event.
             * @extends {Blockly.Events.Abstract}
             * @constructor
             */
            constructor(block: Blockly.Block);
    
            /**
             * Type of this event.
             * @type {string}
             */
            type: string;
    
            /**
             * Encode the event as JSON.
             * @return {!Object} JSON representation.
             */
            toJson(): Object;
    
            /**
             * Decode the JSON event.
             * @param {!Object} json JSON representation.
             */
            fromJson(json: Object): void;
    
            /**
             * Record the block's new location.  Called after the move.
             */
            recordNew(): void;
    
            /**
             * Returns the parentId and input if the block is connected,
             *   or the XY location if disconnected.
             * @return {!Object} Collection of location info.
             * @private
             */
            currentLocation_(): Object;
    
            /**
             * Does this event record any change of state?
             * @return {boolean} True if something changed.
             */
            isNull(): boolean;
    
            /**
             * Run a move event.
             * @param {boolean} forward True if run forward, false if run backward (undo).
             */
            run(forward: boolean): void;
    } 
    

    class BlockMove extends BlockMove__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class BlockMove__Class extends Blockly.Events.Abstract__Class  { 
    
            /**
             * Class for a block move event.  Created before the move.
             * @param {Blockly.Block} block The moved block.  Null for a blank event.
             * @extends {Blockly.Events.Abstract}
             * @constructor
             */
            constructor(block: Blockly.Block);
    } 
    

    class Ui extends Ui__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Ui__Class extends Blockly.Events.Abstract__Class  { 
    
            /**
             * Class for a UI event.
             * @param {Blockly.Block} block The affected block.
             * @param {string} element One of 'selected', 'comment', 'mutator', etc.
             * @param {*} oldValue Previous value of element.
             * @param {*} newValue New value of element.
             * @extends {Blockly.Events.Abstract}
             * @constructor
             */
            constructor(block: Blockly.Block, element: string, oldValue: any, newValue: any);
    
            /**
             * Type of this event.
             * @type {string}
             */
            type: string;
    
            /**
             * Encode the event as JSON.
             * @return {!Object} JSON representation.
             */
            toJson(): Object;
    
            /**
             * Decode the JSON event.
             * @param {!Object} json JSON representation.
             */
            fromJson(json: Object): void;
    } 
    

    class VarCreate extends VarCreate__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class VarCreate__Class extends Blockly.Events.Abstract__Class  { 
    
            /**
             * Class for a variable creation event.
             * @param {Blockly.VariableModel} variable The created variable.
             *     Null for a blank event.
             * @extends {Blockly.Events.Abstract}
             * @constructor
             */
            constructor(variable: Blockly.VariableModel);
    
            /**
             * Type of this event.
             * @type {string}
             */
            type: string;
    
            /**
             * Encode the event as JSON.
             * @return {!Object} JSON representation.
             */
            toJson(): Object;
    
            /**
             * Decode the JSON event.
             * @param {!Object} json JSON representation.
             */
            fromJson(json: Object): void;
    
            /**
             * Run a variable creation event.
             * @param {boolean} forward True if run forward, false if run backward (undo).
             */
            run(forward: boolean): void;
    } 
    

    class VarDelete extends VarDelete__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class VarDelete__Class extends Blockly.Events.Abstract__Class  { 
    
            /**
             * Class for a variable deletion event.
             * @param {Blockly.VariableModel} variable The deleted variable.
             *     Null for a blank event.
             * @extends {Blockly.Events.Abstract}
             * @constructor
             */
            constructor(variable: Blockly.VariableModel);
    
            /**
             * Type of this event.
             * @type {string}
             */
            type: string;
    
            /**
             * Encode the event as JSON.
             * @return {!Object} JSON representation.
             */
            toJson(): Object;
    
            /**
             * Decode the JSON event.
             * @param {!Object} json JSON representation.
             */
            fromJson(json: Object): void;
    
            /**
             * Run a variable deletion event.
             * @param {boolean} forward True if run forward, false if run backward (undo).
             */
            run(forward: boolean): void;
    } 
    

    class VarRename extends VarRename__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class VarRename__Class extends Blockly.Events.Abstract__Class  { 
    
            /**
             * Class for a variable rename event.
             * @param {Blockly.VariableModel} variable The renamed variable.
             *     Null for a blank event.
             * @param {string} newName The new name the variable will be changed to.
             * @extends {Blockly.Events.Abstract}
             * @constructor
             */
            constructor(variable: Blockly.VariableModel, newName: string);
    
            /**
             * Type of this event.
             * @type {string}
             */
            type: string;
    
            /**
             * Encode the event as JSON.
             * @return {!Object} JSON representation.
             */
            toJson(): Object;
    
            /**
             * Decode the JSON event.
             * @param {!Object} json JSON representation.
             */
            fromJson(json: Object): void;
    
            /**
             * Run a variable rename event.
             * @param {boolean} forward True if run forward, false if run backward (undo).
             */
            run(forward: boolean): void;
    } 
    

    /**
     * Group ID for new events.  Grouped events are indivisible.
     * @type {string}
     * @private
     */
    var group_: string;

    /**
     * Sets whether the next event should be added to the undo stack.
     * @type {boolean}
     */
    var recordUndo: boolean;

    /**
     * Allow change events to be created and fired.
     * @type {number}
     * @private
     */
    var disabled_: number;

    /**
     * Name of event that creates a block. Will be deprecated for BLOCK_CREATE.
     * @const
     */
    var CREATE: any /*missing*/;

    /**
     * Name of event that creates a block.
     * @const
     */
    var BLOCK_CREATE: any /*missing*/;

    /**
     * Name of event that deletes a block. Will be deprecated for BLOCK_DELETE.
     * @const
     */
    var DELETE: any /*missing*/;

    /**
     * Name of event that deletes a block.
     * @const
     */
    var BLOCK_DELETE: any /*missing*/;

    /**
     * Name of event that changes a block. Will be deprecated for BLOCK_CHANGE.
     * @const
     */
    var CHANGE: any /*missing*/;

    /**
     * Name of event that changes a block.
     * @const
     */
    var BLOCK_CHANGE: any /*missing*/;

    /**
     * Name of event that moves a block. Will be deprecated for BLOCK_MOVE.
     * @const
     */
    var MOVE: any /*missing*/;

    /**
     * Name of event that moves a block.
     * @const
     */
    var BLOCK_MOVE: any /*missing*/;

    /**
     * Name of event that creates a variable.
     * @const
     */
    var VAR_CREATE: any /*missing*/;

    /**
     * Name of event that deletes a variable.
     * @const
     */
    var VAR_DELETE: any /*missing*/;

    /**
     * Name of event that renames a variable.
     * @const
     */
    var VAR_RENAME: any /*missing*/;

    /**
     * Name of event that records a UI change.
     * @const
     */
    var UI: any /*missing*/;

    /**
     * List of events queued for firing.
     * @private
     */
    var FIRE_QUEUE_: any /*missing*/;

    /**
     * Create a custom event and fire it.
     * @param {!Blockly.Events.Abstract} event Custom data for event.
     */
    function fire(event: Blockly.Events.Abstract): void;

    /**
     * Fire all queued events.
     * @private
     */
    function fireNow_(): void;

    /**
     * Filter the queued events and merge duplicates.
     * @param {!Array.<!Blockly.Events.Abstract>} queueIn Array of events.
     * @param {boolean} forward True if forward (redo), false if backward (undo).
     * @return {!Array.<!Blockly.Events.Abstract>} Array of filtered events.
     */
    function filter(queueIn: Blockly.Events.Abstract[], forward: boolean): Blockly.Events.Abstract[];

    /**
     * Modify pending undo events so that when they are fired they don't land
     * in the undo stack.  Called by Blockly.Workspace.clearUndo.
     */
    function clearPendingUndo(): void;

    /**
     * Stop sending events.  Every call to this function MUST also call enable.
     */
    function disable(): void;

    /**
     * Start sending events.  Unless events were already disabled when the
     * corresponding call to disable was made.
     */
    function enable(): void;

    /**
     * Returns whether events may be fired or not.
     * @return {boolean} True if enabled.
     */
    function isEnabled(): boolean;

    /**
     * Current group.
     * @return {string} ID string.
     */
    function getGroup(): string;

    /**
     * Start or stop a group.
     * @param {boolean|string} state True to start new group, false to end group.
     *   String to set group explicitly.
     */
    function setGroup(state: boolean|string): void;

    /**
     * Compute a list of the IDs of the specified block and all its descendants.
     * @param {!Blockly.Block} block The root block.
     * @return {!Array.<string>} List of block IDs.
     * @private
     */
    function getDescendantIds_(block: Blockly.Block): string[];

    /**
     * Decode the JSON into an event.
     * @param {!Object} json JSON representation.
     * @param {!Blockly.Workspace} workspace Target workspace for event.
     * @return {!Blockly.Events.Abstract} The event represented by the JSON.
     */
    function fromJson(json: Object, workspace: Blockly.Workspace): Blockly.Events.Abstract;

    /**
     * Enable/disable a block depending on whether it is properly connected.
     * Use this on applications where all blocks should be connected to a top block.
     * Recommend setting the 'disable' option to 'false' in the config so that
     * users don't try to reenable disabled orphan blocks.
     * @param {!Blockly.Events.Abstract} event Custom data for event.
     */
    function disableOrphans(event: Blockly.Events.Abstract): void;
}

declare module Blockly.Extensions {

    /**
     * The set of all registered extensions, keyed by extension name/id.
     * @private
     */
    var ALL_: any /*missing*/;

    /**
     * Registers a new extension function. Extensions are functions that help
     * initialize blocks, usually adding dynamic behavior such as onchange
     * handlers and mutators. These are applied using Block.applyExtension(), or
     * the JSON "extensions" array attribute.
     * @param {string} name The name of this extension.
     * @param {Function} initFn The function to initialize an extended block.
     * @throws {Error} if the extension name is empty, the extension is already
     *     registered, or extensionFn is not a function.
     */
    function register(name: string, initFn: Function): void;

    /**
     * Registers a new extension function that adds all key/value of mixinObj.
     * @param {string} name The name of this extension.
     * @param {!Object} mixinObj The values to mix in.
     * @throws {Error} if the extension name is empty or the extension is already
     *     registered.
     */
    function registerMixin(name: string, mixinObj: Object): void;

    /**
     * Registers a new extension function that adds a mutator to the block.
     * At register time this performs some basic sanity checks on the mutator.
     * The wrapper may also add a mutator dialog to the block, if both compose and
     * decompose are defined on the mixin.
     * @param {string} name The name of this mutator extension.
     * @param {!Object} mixinObj The values to mix in.
     * @param {(function())=} opt_helperFn An optional function to apply after
     *     mixing in the object.
     * @param {Array.<string>=} opt_blockList A list of blocks to appear in the
     *     flyout of the mutator dialog.
     * @throws {Error} if the mutation is invalid or can't be applied to the block.
     */
    function registerMutator(name: string, mixinObj: Object, opt_helperFn?: { (): any /*missing*/ }, opt_blockList?: string[]): void;

    /**
     * Applies an extension method to a block. This should only be called during
     * block construction.
     * @param {string} name The name of the extension.
     * @param {!Blockly.Block} block The block to apply the named extension to.
     * @param {boolean} isMutator True if this extension defines a mutator.
     * @throws {Error} if the extension is not found.
     */
    function apply(name: string, block: Blockly.Block, isMutator: boolean): void;

    /**
     * Check that the given value is a function.
     * @param {string} errorPrefix The string to prepend to any error message.
     * @param {*} func Function to check.
     * @param {string} propertyName Which property to check.
     * @throws {Error} if the property does not exist or is not a function.
     * @private
     */
    function checkHasFunction_(errorPrefix: string, func: any, propertyName: string): void;

    /**
     * Check that the given block does not have any of the four mutator properties
     * defined on it.  This function should be called before applying a mutator
     * extension to a block, to make sure we are not overwriting properties.
     * @param {string} mutationName The name of the mutation to reference in error
     *     messages.
     * @param {!Blockly.Block} block The block to check.
     * @throws {Error} if any of the properties already exist on the block.
     * @private
     */
    function checkNoMutatorProperties_(mutationName: string, block: Blockly.Block): void;

    /**
     * Check that the given object has both or neither of the functions required
     * to have a mutator dialog.
     * These functions are 'compose' and 'decompose'.  If a block has one, it must
     * have both.
     * @param {!Object} object The object to check.
     * @param {string} errorPrefix The string to prepend to any error message.
     * @return {boolean} True if the object has both functions.  False if it has
     *     neither function.
     * @throws {Error} if the object has only one of the functions.
     * @private
     */
    function checkMutatorDialog_(object: Object, errorPrefix: string): boolean;

    /**
     * Check that a block has required mutator properties.  This should be called
     * after applying a mutation extension.
     * @param {string} errorPrefix The string to prepend to any error message.
     * @param {!Blockly.Block} block The block to inspect.
     * @private
     */
    function checkBlockHasMutatorProperties_(errorPrefix: string, block: Blockly.Block): void;

    /**
     * Get a list of values of mutator properties on the given block.
     * @param {!Blockly.Block} block The block to inspect.
     * @return {!Array.<Object>} a list with all of the defined properties, which
     *     should be functions, but may be anything other than undefined.
     * @private
     */
    function getMutatorProperties_(block: Blockly.Block): Object[];

    /**
     * Check that the current mutator properties match a list of old mutator
     * properties.  This should be called after applying a non-mutator extension,
     * to verify that the extension didn't change properties it shouldn't.
     * @param {!Array.<Object>} oldProperties The old values to compare to.
     * @param {!Blockly.Block} block The block to inspect for new values.
     * @return {boolean} True if the property lists match.
     * @private
     */
    function mutatorPropertiesMatch_(oldProperties: Object[], block: Blockly.Block): boolean;

    /**
     * Builds an extension function that will map a dropdown value to a tooltip
     * string.
     *
     * This method includes multiple checks to ensure tooltips, dropdown options,
     * and message references are aligned. This aims to catch errors as early as
     * possible, without requiring developers to manually test tooltips under each
     * option. After the page is loaded, each tooltip text string will be checked
     * for matching message keys in the internationalized string table. Deferring
     * this until the page is loaded decouples loading dependencies. Later, upon
     * loading the first block of any given type, the extension will validate every
     * dropdown option has a matching tooltip in the lookupTable.  Errors are
     * reported as warnings in the console, and are never fatal.
     * @param {string} dropdownName The name of the field whose value is the key
     *     to the lookup table.
     * @param {!Object.<string, string>} lookupTable The table of field values to
     *     tooltip text.
     * @return {Function} The extension function.
     */
    function buildTooltipForDropdown(dropdownName: string, lookupTable: { [key: string]: string }): Function;

    /**
     * Checks all options keys are present in the provided string lookup table.
     * Emits console warnings when they are not.
     * @param {!Blockly.Block} block The block containing the dropdown
     * @param {string} dropdownName The name of the dropdown
     * @param {!Object.<string, string>} lookupTable The string lookup table
     * @private
     */
    function checkDropdownOptionsInTable_(block: Blockly.Block, dropdownName: string, lookupTable: { [key: string]: string }): void;

    /**
     * Builds an extension function that will install a dynamic tooltip. The
     * tooltip message should include the string '%1' and that string will be
     * replaced with the value of the named field.
     * @param {string} msgTemplate The template form to of the message text, with
     *     %1 placeholder.
     * @param {string} fieldName The field with the replacement value.
     * @returns {Function} The extension function.
     */
    function buildTooltipWithFieldValue(msgTemplate: string, fieldName: string): Function;

    /**
     * Configures the tooltip to mimic the parent block when connected. Otherwise,
     * uses the tooltip text at the time this extension is initialized. This takes
     * advantage of the fact that all other values from JSON are initialized before
     * extensions.
     * @this {Blockly.Block}
     * @private
     */
    function extensionParentTooltip_(): void;
}

declare module Blockly {

    class Field extends Field__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Field__Class  { 
    
            /**
             * Abstract class for an editable field.
             * @param {string} text The initial content of the field.
             * @param {Function=} opt_validator An optional function that is called
             *     to validate any constraints on what the user entered.  Takes the new
             *     text as an argument and returns either the accepted text, a replacement
             *     text, or null to abort the change.
             * @constructor
             */
            constructor(text: string, opt_validator?: Function);
    
            /**
             * Name of field.  Unique within each block.
             * Static labels are usually unnamed.
             * @type {string|undefined}
             */
            name: string|any /*undefined*/;
    
            /**
             * Maximum characters of text to display before adding an ellipsis.
             * @type {number}
             */
            maxDisplayLength: number;
    
            /**
             * Visible text to display.
             * @type {string}
             * @private
             */
            text_: string;
    
            /**
             * Block this field is attached to.  Starts as null, then in set in init.
             * @type {Blockly.Block}
             * @private
             */
            sourceBlock_: Blockly.Block;
    
            /**
             * Is the field visible, or hidden due to the block being collapsed?
             * @type {boolean}
             * @private
             */
            visible_: boolean;
    
            /**
             * Validation function called when user edits an editable field.
             * @type {Function}
             * @private
             */
            validator_: Function;
    
            /**
             * Editable fields are saved by the XML renderer, non-editable fields are not.
             */
            EDITABLE: any /*missing*/;
    
            /**
             * Attach this field to a block.
             * @param {!Blockly.Block} block The block containing this field.
             */
            setSourceBlock(block: Blockly.Block): void;
    
            /**
             * Install this field on a block.
             */
            init(): void;
    
            /** @type {!Element} */
            textElement_: Element;
    
            /**
             * Initializes the model of the field after it has been installed on a block.
             * No-op by default.
             */
            initModel(): void;
    
            /**
             * Dispose of all DOM objects belonging to this editable field.
             */
            dispose(): void;
    
            /**
             * Add or remove the UI indicating if this field is editable or not.
             */
            updateEditable(): void;
    
            /**
             * Check whether this field is currently editable.  Some fields are never
             * editable (e.g. text labels).  Those fields are not serialized to XML.  Other
             * fields may be editable, and therefore serialized, but may exist on
             * non-editable blocks.
             * @return {boolean} whether this field is editable and on an editable block
             */
            isCurrentlyEditable(): boolean;
    
            /**
             * Gets whether this editable field is visible or not.
             * @return {boolean} True if visible.
             */
            isVisible(): boolean;
    
            /**
             * Sets whether this editable field is visible or not.
             * @param {boolean} visible True if visible.
             */
            setVisible(visible: boolean): void;
    
            /**
             * Sets a new validation function for editable fields.
             * @param {Function} handler New validation function, or null.
             */
            setValidator(handler: Function): void;
    
            /**
             * Gets the validation function for editable fields.
             * @return {Function} Validation function, or null.
             */
            getValidator(): Function;
    
            /**
             * Validates a change.  Does nothing.  Subclasses may override this.
             * @param {string} text The user's text.
             * @return {string} No change needed.
             */
            classValidator(text: string): string;
    
            /**
             * Calls the validation function for this field, as well as all the validation
             * function for the field's class and its parents.
             * @param {string} text Proposed text.
             * @return {?string} Revised text, or null if invalid.
             */
            callValidator(text: string): string;
    
            /**
             * Gets the group element for this editable field.
             * Used for measuring the size and for positioning.
             * @return {!Element} The group element.
             */
            getSvgRoot(): Element;
    
            /**
             * Draws the border with the correct width.
             * Saves the computed width in a property.
             * @private
             */
            render_(): void;
    
            /**
             * Updates thw width of the field. This calls getCachedWidth which won't cache
             * the approximated width on IE/Edge when `getComputedTextLength` fails. Once
             * it eventually does succeed, the result will be cached.
             **/
            updateWidth(): void;
    
            /**
             * Returns the height and width of the field.
             * @return {!goog.math.Size} Height and width.
             */
            getSize(): goog.math.Size;
    
            /**
             * Returns the bounding box of the rendered field, accounting for workspace
             * scaling.
             * @return {!Object} An object with top, bottom, left, and right in pixels
             *     relative to the top left corner of the page (window coordinates).
             * @private
             */
            getScaledBBox_(): Object;
    
            /**
             * Get the text from this field as displayed on screen.  May differ from getText
             * due to ellipsis, and other formatting.
             * @return {string} Currently displayed text.
             * @private
             */
            getDisplayText_(): string;
    
            /**
             * Get the text from this field.
             * @return {string} Current text.
             */
            getText(): string;
    
            /**
             * Set the text in this field.  Trigger a rerender of the source block.
             * @param {*} newText New text.
             */
            setText(newText: any): void;
    
            /**
             * Force a rerender of the block that this field is installed on, which will
             * rerender this field and adjust for any sizing changes.
             * Other fields on the same block will not rerender, because their sizes have
             * already been recorded.
             * @package
             */
            forceRerender(): void;
    
            /**
             * By default there is no difference between the human-readable text and
             * the language-neutral values.  Subclasses (such as dropdown) may define this.
             * @return {string} Current value.
             */
            getValue(): string;
    
            /**
             * By default there is no difference between the human-readable text and
             * the language-neutral values.  Subclasses (such as dropdown) may define this.
             * @param {string} newValue New value.
             */
            setValue(newValue: string): void;
    
            /**
             * Handle a mouse down event on a field.
             * @param {!Event} e Mouse down event.
             * @private
             */
            onMouseDown_(e: Event): void;
    
            /**
             * Change the tooltip text for this field.
             * @param {string|!Element} newTip Text for tooltip or a parent element to
             *     link to for its tooltip.
             */
            setTooltip(newTip: string|Element): void;
    
            /**
             * Return the absolute coordinates of the top-left corner of this field.
             * The origin (0,0) is the top-left corner of the page body.
             * @return {!goog.math.Coordinate} Object with .x and .y properties.
             * @private
             */
            getAbsoluteXY_(): goog.math.Coordinate;
    } 
    
}

declare module Blockly.Field {

    /**
     * Temporary cache of text widths.
     * @type {Object}
     * @private
     */
    var cacheWidths_: Object;

    /**
     * Number of current references to cache.
     * @type {number}
     * @private
     */
    var cacheReference_: number;

    /**
     * Non-breaking space.
     * @const
     */
    var NBSP: any /*missing*/;

    /**
     * Gets the width of a text element, caching it in the process.
     * @param {!Element} textElement An SVG 'text' element.
     * @return {number} Width of element.
     */
    function getCachedWidth(textElement: Element): number;

    /**
     * Start caching field widths.  Every call to this function MUST also call
     * stopCache.  Caches must not survive between execution threads.
     */
    function startCache(): void;

    /**
     * Stop caching field widths.  Unless caching was already on when the
     * corresponding call to startCache was made.
     */
    function stopCache(): void;
}

declare module Blockly {

    class FieldAngle extends FieldAngle__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldAngle__Class extends Blockly.FieldTextInput__Class  { 
    
            /**
             * Class for an editable angle field.
             * @param {(string|number)=} opt_value The initial content of the field. The
             *     value should cast to a number, and if it does not, '0' will be used.
             * @param {Function=} opt_validator An optional function that is called
             *     to validate any constraints on what the user entered.  Takes the new
             *     text as an argument and returns the accepted text or null to abort
             *     the change.
             * @extends {Blockly.FieldTextInput}
             * @constructor
             */
            constructor(opt_value?: string|number, opt_validator?: Function);
    
            /**
             * Adds degree symbol and recalculates width.
             * Saves the computed width in a property.
             * @private
             */
            render_(): void;
    
            /**
             * Clean up this FieldAngle, as well as the inherited FieldTextInput.
             * @return {!Function} Closure to call on destruction of the WidgetDiv.
             * @private
             */
            dispose_(): Function;
    
            /**
             * Show the inline free-text editor on top of the text.
             * @private
             */
            showEditor_(): void;
    
            /**
             * Set the angle to match the mouse's position.
             * @param {!Event} e Mouse move event.
             */
            onMouseMove(e: Event): void;
    
            /**
             * Insert a degree symbol.
             * @param {?string} text New text.
             */
            setText(text: string): void;
    
            /**
             * Redraw the graph with the current angle.
             * @private
             */
            updateGraph_(): void;
    
            /**
             * Ensure that only an angle may be entered.
             * @param {string} text The user's text.
             * @return {?string} A string representing a valid angle, or null if invalid.
             */
            classValidator(text: string): string;
    } 
    
}

declare module Blockly.FieldAngle {

    /**
     * Round angles to the nearest 15 degrees when using mouse.
     * Set to 0 to disable rounding.
     */
    var ROUND: any /*missing*/;

    /**
     * Half the width of protractor image.
     */
    var HALF: any /*missing*/;

    /**
     * Angle increases clockwise (true) or counterclockwise (false).
     */
    var CLOCKWISE: any /*missing*/;

    /**
     * Offset the location of 0 degrees (and all angles) by a constant.
     * Usually either 0 (0 = right) or 90 (0 = up).
     */
    var OFFSET: any /*missing*/;

    /**
     * Maximum allowed angle before wrapping.
     * Usually either 360 (for 0 to 359.9) or 180 (for -179.9 to 180).
     */
    var WRAP: any /*missing*/;

    /**
     * Radius of protractor circle.  Slightly smaller than protractor size since
     * otherwise SVG crops off half the border at the edges.
     */
    var RADIUS: any /*missing*/;
}

declare module Blockly {

    class FieldCheckbox extends FieldCheckbox__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldCheckbox__Class extends Blockly.Field__Class  { 
    
            /**
             * Class for a checkbox field.
             * @param {string} state The initial state of the field ('TRUE' or 'FALSE').
             * @param {Function=} opt_validator A function that is executed when a new
             *     option is selected.  Its sole argument is the new checkbox state.  If
             *     it returns a value, this becomes the new checkbox state, unless the
             *     value is null, in which case the change is aborted.
             * @extends {Blockly.Field}
             * @constructor
             */
            constructor(state: string, opt_validator?: Function);
    
            /**
             * Mouse cursor style when over the hotspot that initiates editability.
             */
            CURSOR: any /*missing*/;
    
            /**
             * Install this checkbox on a block.
             */
            init(): void;
    
            /**
             * Return 'TRUE' if the checkbox is checked, 'FALSE' otherwise.
             * @return {string} Current state.
             */
            getValue(): string;
    
            /**
             * Set the checkbox to be checked if newBool is 'TRUE' or true,
             * unchecks otherwise.
             * @param {string|boolean} newBool New state.
             */
            setValue(newBool: string|boolean): void;
    
            /**
             * Toggle the state of the checkbox.
             * @private
             */
            showEditor_(): void;
    } 
    
}

declare module Blockly.FieldCheckbox {

    /**
     * Character for the checkmark.
     */
    var CHECK_CHAR: any /*missing*/;
}

declare module Blockly {

    class FieldColour extends FieldColour__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldColour__Class extends Blockly.Field__Class  { 
    
            /**
             * Class for a colour input field.
             * @param {string} colour The initial colour in '#rrggbb' format.
             * @param {Function=} opt_validator A function that is executed when a new
             *     colour is selected.  Its sole argument is the new colour value.  Its
             *     return value becomes the selected colour, unless it is undefined, in
             *     which case the new colour stands, or it is null, in which case the change
             *     is aborted.
             * @extends {Blockly.Field}
             * @constructor
             */
            constructor(colour: string, opt_validator?: Function);
    
            /**
             * By default use the global constants for colours.
             * @type {Array.<string>}
             * @private
             */
            colours_: string[];
    
            /**
             * By default use the global constants for columns.
             * @type {number}
             * @private
             */
            columns_: number;
    
            /**
             * Install this field on a block.
             */
            init(): void;
    
            /**
             * Mouse cursor style when over the hotspot that initiates the editor.
             */
            CURSOR: any /*missing*/;
    
            /**
             * Close the colour picker if this input is being deleted.
             */
            dispose(): void;
    
            /**
             * Return the current colour.
             * @return {string} Current colour in '#rrggbb' format.
             */
            getValue(): string;
    
            /**
             * Set the colour.
             * @param {string} colour The new colour in '#rrggbb' format.
             */
            setValue(colour: string): void;
    
            /**
             * Get the text from this field.  Used when the block is collapsed.
             * @return {string} Current text.
             */
            getText(): string;
    
            /**
             * Set a custom colour grid for this field.
             * @param {Array.<string>} colours Array of colours for this block,
             *     or null to use default (Blockly.FieldColour.COLOURS).
             * @return {!Blockly.FieldColour} Returns itself (for method chaining).
             */
            setColours(colours: string[]): Blockly.FieldColour;
    
            /**
             * Set a custom grid size for this field.
             * @param {number} columns Number of columns for this block,
             *     or 0 to use default (Blockly.FieldColour.COLUMNS).
             * @return {!Blockly.FieldColour} Returns itself (for method chaining).
             */
            setColumns(columns: number): Blockly.FieldColour;
    
            /**
             * Create a palette under the colour field.
             * @private
             */
            showEditor_(): void;
    
            /**
             * Create a color picker widget and render it inside the widget div.
             * @return {!goog.ui.ColorPicker} The newly created color picker.
             * @private
             */
            createWidget_(): goog.ui.ColorPicker;
    } 
    
}

declare module Blockly.FieldColour {

    /**
     * An array of colour strings for the palette.
     * See bottom of this page for the default:
     * http://docs.closure-library.googlecode.com/git/closure_goog_ui_colorpicker.js.source.html
     * @type {!Array.<string>}
     */
    var COLOURS: string[];

    /**
     * Number of columns in the palette.
     */
    var COLUMNS: any /*missing*/;

    /**
     * Hide the colour palette.
     * @private
     */
    function widgetDispose_(): void;
}

declare module Blockly {

    class FieldDate extends FieldDate__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldDate__Class extends Blockly.Field__Class  { 
    
            /**
             * Class for a date input field.
             * @param {string} date The initial date.
             * @param {Function=} opt_validator A function that is executed when a new
             *     date is selected.  Its sole argument is the new date value.  Its
             *     return value becomes the selected date, unless it is undefined, in
             *     which case the new date stands, or it is null, in which case the change
             *     is aborted.
             * @extends {Blockly.Field}
             * @constructor
             */
            constructor(date: string, opt_validator?: Function);
    
            /**
             * Mouse cursor style when over the hotspot that initiates the editor.
             */
            CURSOR: any /*missing*/;
    
            /**
             * Close the colour picker if this input is being deleted.
             */
            dispose(): void;
    
            /**
             * Return the current date.
             * @return {string} Current date.
             */
            getValue(): string;
    
            /**
             * Set the date.
             * @param {string} date The new date.
             */
            setValue(date: string): void;
    
            /**
             * Create a date picker under the date field.
             * @private
             */
            showEditor_(): void;
    
            /**
             * Create a date picker widget and render it inside the widget div.
             * @return {!goog.ui.DatePicker} The newly created date picker.
             * @private
             */
            createWidget_(): goog.ui.DatePicker;
    } 
    
}

declare module Blockly.FieldDate {

    /**
     * Hide the date picker.
     * @private
     */
    function widgetDispose_(): void;

    /**
     * Load the best language pack by scanning the Blockly.Msg object for a
     * language that matches the available languages in Closure.
     * @private
     */
    function loadLanguage_(): void;

    /**
     * CSS for date picker.  See css.js for use.
     */
    var CSS: any /*missing*/;
}

declare module Blockly {

    class FieldDropdown extends FieldDropdown__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldDropdown__Class extends Blockly.Field__Class  { 
    
            /**
             * Class for an editable dropdown field.
             * @param {(!Array.<!Array>|!Function)} menuGenerator An array of options
             *     for a dropdown list, or a function which generates these options.
             * @param {Function=} opt_validator A function that is executed when a new
             *     option is selected, with the newly selected value as its sole argument.
             *     If it returns a value, that value (which must be one of the options) will
             *     become selected in place of the newly selected option, unless the return
             *     value is null, in which case the change is aborted.
             * @extends {Blockly.Field}
             * @constructor
             */
            constructor(menuGenerator: any[][]|Function, opt_validator?: Function);
    
            /**
             * Mouse cursor style when over the hotspot that initiates the editor.
             */
            CURSOR: any /*missing*/;
    
            /**
             * Language-neutral currently selected string or image object.
             * @type {string|!Object}
             * @private
             */
            value_: string|Object;
    
            /**
             * SVG image element if currently selected option is an image, or null.
             * @type {SVGElement}
             * @private
             */
            imageElement_: SVGElement;
    
            /**
             * Object with src, height, width, and alt attributes if currently selected
             * option is an image, or null.
             * @type {Object}
             * @private
             */
            imageJson_: Object;
    
            /**
             * Install this dropdown on a block.
             */
            init(): void;
    
            /**
             * Create a dropdown menu under the text.
             * @private
             */
            showEditor_(): void;
    
            /**
             * Add event listeners for actions on the items in the dropdown menu.
             * @param {!goog.ui.Menu} menu The menu to add listeners to.
             * @private
             */
            addEventListeners_(menu: goog.ui.Menu): void;
    
            /**
             * Add a listener for mouse and keyboard events in the menu and its items.
             * @param {!goog.ui.Menu} menu The menu to add listeners to.
             * @private
             */
            addActionListener_(menu: goog.ui.Menu): void;
    
            /**
             * Add a listener for touch start events on menu items.
             * @param {!goog.ui.Menu} menu The menu to add the listener to.
             * @private
             */
            addTouchStartListener_(menu: goog.ui.Menu): void;
    
            /**
             * Add a listener for touch end events on menu items.
             * @param {!goog.ui.Menu} menu The menu to add the listener to.
             * @private
             */
            addTouchEndListener_(menu: goog.ui.Menu): void;
    
            /**
             * Create and populate the menu and menu items for this dropdown, based on
             * the options list.
             * @return {!goog.ui.Menu} The populated dropdown menu.
             * @private
             */
            createMenu_(): goog.ui.Menu;
    
            /**
             * Place the menu correctly on the screen, taking into account the dimensions
             * of the menu and the dimensions of the screen so that it doesn't run off any
             * edges.
             * @param {!goog.ui.Menu} menu The menu to position.
             * @private
             */
            positionMenu_(menu: goog.ui.Menu): void;
    
            /**
             * Create and render the menu widget inside Blockly's widget div.
             * @param {!goog.ui.Menu} menu The menu to add to the widget div.
             * @private
             */
            createWidget_(menu: goog.ui.Menu): void;
    
            /**
             * Returns the coordinates of the anchor rectangle for the widget div.
             * On a FieldDropdown we take the top-left corner of the field, then adjust for
             * the size of the checkmark that is displayed next to the currently selected
             * item. This means that the item text will be positioned directly under the
             * field text, rather than offset slightly.
             * @returns {!Object} The bounding rectangle of the anchor, in window
             *     coordinates.
             * @private
             */
            getAnchorDimensions_(): Object;
    
            /**
             * Handle the selection of an item in the dropdown menu.
             * @param {!goog.ui.Menu} menu The Menu component clicked.
             * @param {!goog.ui.MenuItem} menuItem The MenuItem selected within menu.
             */
            onItemSelected(menu: goog.ui.Menu, menuItem: goog.ui.MenuItem): void;
    
            /**
             * Factor out common words in statically defined options.
             * Create prefix and/or suffix labels.
             * @private
             */
            trimOptions_(): void;
    
            /**
             * @return {boolean} True if the option list is generated by a function.
             *     Otherwise false.
             */
            isOptionListDynamic(): boolean;
    
            /**
             * Return a list of the options for this dropdown.
             * @return {!Array.<!Array>} Array of option tuples:
             *     (human-readable text or image, language-neutral name).
             */
            getOptions(): any[][];
    
            /**
             * Get the language-neutral value from this dropdown menu.
             * @return {string} Current text.
             */
            getValue(): string;
    
            /**
             * Set the language-neutral value for this dropdown menu.
             * @param {string} newValue New value to set.
             */
            setValue(newValue: string): void;
    
            /**
             * Draws the border with the correct width.
             * @private
             */
            render_(): void;
    
            /**
             * Renders the selected option, which must be an image.
             * @private
             */
            renderSelectedImage_(): void;
    
            /**
             * Renders the selected option, which must be text.
             * @private
             */
            renderSelectedText_(): void;
    
            /**
             * Updates the width of the field. Overrides field.prototype.updateWidth to
             * deal with image selections on IE and Edge. If the selected item is not an
             * image, or if the browser is not IE / Edge, this simply calls the parent
             * implementation.
             */
            updateWidth(): void;
    
            /**
             * Close the dropdown menu if this input is being deleted.
             */
            dispose(): void;
    } 
    
}

declare module Blockly.FieldDropdown {

    /**
     * Horizontal distance that a checkmark overhangs the dropdown.
     */
    var CHECKMARK_OVERHANG: any /*missing*/;

    /**
     * Android can't (in 2014) display "▾", so use "▼" instead.
     */
    var ARROW_CHAR: any /*missing*/;

    /**
     * Use the calculated prefix and suffix lengths to trim all of the options in
     * the given array.
     * @param {!Array.<!Array>} options Array of option tuples:
     *     (human-readable text or image, language-neutral name).
     * @param {number} prefixLength The length of the common prefix.
     * @param {number} suffixLength The length of the common suffix
     * @return {!Array.<!Array>} A new array with all of the option text trimmed.
     */
    function applyTrim_(options: any[][], prefixLength: number, suffixLength: number): any[][];
}

declare module Blockly {

    class FieldImage extends FieldImage__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldImage__Class extends Blockly.Field__Class  { 
    
            /**
             * Class for an image on a block.
             * @param {string} src The URL of the image.
             * @param {number} width Width of the image.
             * @param {number} height Height of the image.
             * @param {string=} opt_alt Optional alt text for when block is collapsed.
             * @param {Function=} opt_onClick Optional function to be called when the image
             *     is clicked.  If opt_onClick is defined, opt_alt must also be defined.
             * @extends {Blockly.Field}
             * @constructor
             */
            constructor(src: string, width: number, height: number, opt_alt?: string, opt_onClick?: Function);
    
            /**
             * Editable fields are saved by the XML renderer, non-editable fields are not.
             */
            EDITABLE: any /*missing*/;
    
            /**
             * Install this image on a block.
             */
            init(): void;
    
            /** @type {SVGElement} */
            fieldGroup_: SVGElement;
    
            /** @type {SVGElement} */
            imageElement_: SVGElement;
    
            /**
             * Dispose of all DOM objects belonging to this text.
             */
            dispose(): void;
    
            /**
             * Bind events for a mouse down on the image, but only if a click handler has
             * been defined.
             * @private
             */
            maybeAddClickHandler_(): void;
    
            /**
             * Change the tooltip text for this field.
             * @param {string|!Element} newTip Text for tooltip or a parent element to
             *     link to for its tooltip.
             */
            setTooltip(newTip: string|Element): void;
    
            /**
             * Images are fixed width, no need to render.
             * @private
             */
            render_(): void;
    
            /**
             * Images are fixed width, no need to update.
             * @private
             */
            updateWidth(): void;
    
            /**
             * If field click is called, and click handler defined,
             * call the handler.
             */
            showEditor_(): void;
    } 
    
}

declare module Blockly {

    class FieldLabel extends FieldLabel__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldLabel__Class extends Blockly.Field__Class  { 
    
            /**
             * Class for a non-editable field.
             * @param {string} text The initial content of the field.
             * @param {string=} opt_class Optional CSS class for the field's text.
             * @extends {Blockly.Field}
             * @constructor
             */
            constructor(text: string, opt_class?: string);
    
            /**
             * Editable fields are saved by the XML renderer, non-editable fields are not.
             */
            EDITABLE: any /*missing*/;
    
            /**
             * Install this text on a block.
             */
            init(): void;
    
            /**
             * Dispose of all DOM objects belonging to this text.
             */
            dispose(): void;
    
            /**
             * Gets the group element for this field.
             * Used for measuring the size and for positioning.
             * @return {!Element} The group element.
             */
            getSvgRoot(): Element;
    
            /**
             * Change the tooltip text for this field.
             * @param {string|!Element} newTip Text for tooltip or a parent element to
             *     link to for its tooltip.
             */
            setTooltip(newTip: string|Element): void;
    } 
    
}

declare module Blockly {

    class FieldNumber extends FieldNumber__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldNumber__Class extends Blockly.FieldTextInput__Class  { 
    
            /**
             * Class for an editable number field.
             * @param {(string|number)=} opt_value The initial content of the field. The value
             *     should cast to a number, and if it does not, '0' will be used.
             * @param {(string|number)=} opt_min Minimum value.
             * @param {(string|number)=} opt_max Maximum value.
             * @param {(string|number)=} opt_precision Precision for value.
             * @param {Function=} opt_validator An optional function that is called
             *     to validate any constraints on what the user entered.  Takes the new
             *     text as an argument and returns either the accepted text, a replacement
             *     text, or null to abort the change.
             * @extends {Blockly.FieldTextInput}
             * @constructor
             */
            constructor(opt_value?: string|number, opt_min?: string|number, opt_max?: string|number, opt_precision?: string|number, opt_validator?: Function);
    
            /**
             * Set the maximum, minimum and precision constraints on this field.
             * Any of these properties may be undefiend or NaN to be disabled.
             * Setting precision (usually a power of 10) enforces a minimum step between
             * values. That is, the user's value will rounded to the closest multiple of
             * precision. The least significant digit place is inferred from the precision.
             * Integers values can be enforces by choosing an integer precision.
             * @param {number|string|undefined} min Minimum value.
             * @param {number|string|undefined} max Maximum value.
             * @param {number|string|undefined} precision Precision for value.
             */
            setConstraints(min: number|string|any /*undefined*/, max: number|string|any /*undefined*/, precision: number|string|any /*undefined*/): void;
    
            /**
             * Ensure that only a number in the correct range may be entered.
             * @param {string} text The user's text.
             * @return {?string} A string representing a valid number, or null if invalid.
             */
            classValidator(text: string): string;
    } 
    
}

declare module Blockly {

    class FieldTextInput extends FieldTextInput__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldTextInput__Class extends Blockly.Field__Class  { 
    
            /**
             * Class for an editable text field.
             * @param {string} text The initial content of the field.
             * @param {Function=} opt_validator An optional function that is called
             *     to validate any constraints on what the user entered.  Takes the new
             *     text as an argument and returns either the accepted text, a replacement
             *     text, or null to abort the change.
             * @extends {Blockly.Field}
             * @constructor
             */
            constructor(text: string, opt_validator?: Function);
    
            /**
             * Mouse cursor style when over the hotspot that initiates the editor.
             */
            CURSOR: any /*missing*/;
    
            /**
             * Allow browser to spellcheck this field.
             * @private
             */
            spellcheck_: any /*missing*/;
    
            /**
             * Close the input widget if this input is being deleted.
             */
            dispose(): void;
    
            /**
             * Set the text in this field and fire a change event.
             * @param {*} newText New text.
             */
            setText(newText: any): void;
    
            /**
             * Set whether this field is spellchecked by the browser.
             * @param {boolean} check True if checked.
             */
            setSpellcheck(check: boolean): void;
    
            /**
             * Show the inline free-text editor on top of the text.
             * @param {boolean=} opt_quietInput True if editor should be created without
             *     focus.  Defaults to false.
             * @private
             */
            showEditor_(opt_quietInput?: boolean): void;
    
            /**
             * Create and show a text input editor that is a prompt (usually a popup).
             * Mobile browsers have issues with in-line textareas (focus and keyboards).
             * @private
             */
            showPromptEditor_(): void;
    
            /**
             * Create and show a text input editor that sits directly over the text input.
             * @param {boolean} quietInput True if editor should be created without
             *     focus.
             * @private
             */
            showInlineEditor_(quietInput: boolean): void;
    
            /**
             * Bind handlers for user input on this field and size changes on the workspace.
             * @param {!HTMLInputElement} htmlInput The htmlInput created in showEditor, to
             *     which event handlers will be bound.
             * @private
             */
            bindEvents_(htmlInput: HTMLInputElement): void;
    
            /**
             * Unbind handlers for user input and workspace size changes.
             * @param {!HTMLInputElement} htmlInput The html for this text input.
             * @private
             */
            unbindEvents_(htmlInput: HTMLInputElement): void;
    
            /**
             * Handle key down to the editor.
             * @param {!Event} e Keyboard event.
             * @private
             */
            onHtmlInputKeyDown_(e: Event): void;
    
            /**
             * Handle a change to the editor.
             * @param {!Event} e Keyboard event.
             * @private
             */
            onHtmlInputChange_(e: Event): void;
    
            /**
             * Check to see if the contents of the editor validates.
             * Style the editor accordingly.
             * @private
             */
            validate_(): void;
    
            /**
             * Resize the editor and the underlying block to fit the text.
             * @private
             */
            resizeEditor_(): void;
    
            /**
             * Close the editor, save the results, and dispose of the editable
             * text field's elements.
             * @return {!Function} Closure to call on destruction of the WidgetDiv.
             * @private
             */
            widgetDispose_(): Function;
    } 
    
}

declare module Blockly.FieldTextInput {

    /**
     * Point size of text.  Should match blocklyText's font-size in CSS.
     */
    var FONTSIZE: any /*missing*/;

    /**
     * The HTML input element for the user to type, or null if no FieldTextInput
     * editor is currently open.
     * @type {HTMLInputElement}
     * @private
     */
    var htmlInput_: HTMLInputElement;

    /**
     * Ensure that only a number may be entered.
     * @param {string} text The user's text.
     * @return {?string} A string representing a valid number, or null if invalid.
     */
    function numberValidator(text: string): string;

    /**
     * Ensure that only a nonnegative integer may be entered.
     * @param {string} text The user's text.
     * @return {?string} A string representing a valid int, or null if invalid.
     */
    function nonnegativeIntegerValidator(text: string): string;
}

declare module Blockly {

    class FieldVariable extends FieldVariable__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldVariable__Class extends Blockly.FieldDropdown__Class  { 
    
            /**
             * Class for a variable's dropdown field.
             * @param {?string} varname The default name for the variable.  If null,
             *     a unique variable name will be generated.
             * @param {Function=} opt_validator A function that is executed when a new
             *     option is selected.  Its sole argument is the new option value.
             * @param {Array.<string>=} opt_variableTypes A list of the types of variables
             *     to include in the dropdown.
             * @extends {Blockly.FieldDropdown}
             * @constructor
             */
            constructor(varname: string, opt_validator?: Function, opt_variableTypes?: string[]);
    
            /**
             * Install this dropdown on a block.
             */
            init(): void;
    
            /**
             * Attach this field to a block.
             * @param {!Blockly.Block} block The block containing this field.
             */
            setSourceBlock(block: Blockly.Block): void;
    
            /**
             * Get the variable's name (use a variableDB to convert into a real name).
             * Unline a regular dropdown, variables are literal and have no neutral value.
             * @return {string} Current text.
             */
            getValue(): string;
    
            /**
             * Set the variable name.
             * @param {string} value New text.
             */
            setValue(value: string): void;
    
            /**
             * Return a list of variable types to include in the dropdown.
             * @return {!Array.<string>} Array of variable types.
             * @throws {Error} if variableTypes is an empty array.
             * @private
             */
            getVariableTypes_(): string[];
    
            /**
             * Handle the selection of an item in the variable dropdown menu.
             * Special case the 'Rename variable...' and 'Delete variable...' options.
             * In the rename case, prompt the user for a new name.
             * @param {!goog.ui.Menu} menu The Menu component clicked.
             * @param {!goog.ui.MenuItem} menuItem The MenuItem selected within menu.
             */
            onItemSelected(menu: goog.ui.Menu, menuItem: goog.ui.MenuItem): void;
    } 
    
}

declare module Blockly.FieldVariable {

    /**
     * Return a sorted list of variable names for variable dropdown menus.
     * Include a special option at the end for creating a new variable name.
     * @return {!Array.<string>} Array of variable names.
     * @this {Blockly.FieldVariable}
     */
    function dropdownCreate(): string[];
}

declare module Blockly {

    class Flyout extends Flyout__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Flyout__Class  { 
    
            /**
             * Class for a flyout.
             * @param {!Object} workspaceOptions Dictionary of options for the workspace.
             * @constructor
             */
            constructor(workspaceOptions: Object);
    
            /**
             * @type {!Blockly.Workspace}
             * @private
             */
            workspace_: Blockly.Workspace;
    
            /**
             * Is RTL vs LTR.
             * @type {boolean}
             */
            RTL: boolean;
    
            /**
             * Position of the toolbox and flyout relative to the workspace.
             * @type {number}
             * @private
             */
            toolboxPosition_: number;
    
            /**
             * Opaque data that can be passed to Blockly.unbindEvent_.
             * @type {!Array.<!Array>}
             * @private
             */
            eventWrappers_: any[][];
    
            /**
             * List of background mats that lurk behind each block to catch clicks
             * landing in the blocks' lakes and bays.
             * @type {!Array.<!Element>}
             * @private
             */
            mats_: Element[];
    
            /**
             * List of visible buttons.
             * @type {!Array.<!Blockly.FlyoutButton>}
             * @private
             */
            buttons_: Blockly.FlyoutButton[];
    
            /**
             * List of event listeners.
             * @type {!Array.<!Array>}
             * @private
             */
            listeners_: any[][];
    
            /**
             * List of blocks that should always be disabled.
             * @type {!Array.<!Blockly.Block>}
             * @private
             */
            permanentlyDisabled_: Blockly.Block[];
    
            /**
             * Does the flyout automatically close when a block is created?
             * @type {boolean}
             */
            autoClose: boolean;
    
            /**
             * Whether the flyout is visible.
             * @type {boolean}
             * @private
             */
            isVisible_: boolean;
    
            /**
             * Whether the workspace containing this flyout is visible.
             * @type {boolean}
             * @private
             */
            containerVisible_: boolean;
    
            /**
             * Corner radius of the flyout background.
             * @type {number}
             * @const
             */
            CORNER_RADIUS: number;
    
            /**
             * Margin around the edges of the blocks in the flyout.
             * @type {number}
             * @const
             */
            MARGIN: number;
    
            /**
             * Gap between items in horizontal flyouts. Can be overridden with the "sep"
             * element.
             * @const {number}
             */
            GAP_X: any /*missing*/;
    
            /**
             * Gap between items in vertical flyouts. Can be overridden with the "sep"
             * element.
             * @const {number}
             */
            GAP_Y: any /*missing*/;
    
            /**
             * Top/bottom padding between scrollbar and edge of flyout background.
             * @type {number}
             * @const
             */
            SCROLLBAR_PADDING: number;
    
            /**
             * Width of flyout.
             * @type {number}
             * @private
             */
            width_: number;
    
            /**
             * Height of flyout.
             * @type {number}
             * @private
             */
            height_: number;
    
            /**
             * Range of a drag angle from a flyout considered "dragging toward workspace".
             * Drags that are within the bounds of this many degrees from the orthogonal
             * line to the flyout edge are considered to be "drags toward the workspace".
             * Example:
             * Flyout                                                  Edge   Workspace
             * [block] /  <-within this angle, drags "toward workspace" |
             * [block] ---- orthogonal to flyout boundary ----          |
             * [block] \                                                |
             * The angle is given in degrees from the orthogonal.
             *
             * This is used to know when to create a new block and when to scroll the
             * flyout. Setting it to 360 means that all drags create a new block.
             * @type {number}
             * @private
            */
            dragAngleRange_: number;
    
            /**
             * Creates the flyout's DOM.  Only needs to be called once.  The flyout can
             * either exist as its own svg element or be a g element nested inside a
             * separate svg element.
             * @param {string} tagName The type of tag to put the flyout in. This
             *     should be <svg> or <g>.
             * @return {!Element} The flyout's SVG group.
             */
            createDom(tagName: string): Element;
    
            /**
             * Initializes the flyout.
             * @param {!Blockly.Workspace} targetWorkspace The workspace in which to create
             *     new blocks.
             */
            init(targetWorkspace: Blockly.Workspace): void;
    
            /**
             * Dispose of this flyout.
             * Unlink from all DOM elements to prevent memory leaks.
             */
            dispose(): void;
    
            /**
             * Get the width of the flyout.
             * @return {number} The width of the flyout.
             */
            getWidth(): number;
    
            /**
             * Get the height of the flyout.
             * @return {number} The width of the flyout.
             */
            getHeight(): number;
    
            /**
             * Get the workspace inside the flyout.
             * @return {!Blockly.WorkspaceSvg} The workspace inside the flyout.
             * @package
             */
            getWorkspace(): Blockly.WorkspaceSvg;
    
            /**
             * Is the flyout visible?
             * @return {boolean} True if visible.
             */
            isVisible(): boolean;
    
            /**
             * Set whether the flyout is visible. A value of true does not necessarily mean
             * that the flyout is shown. It could be hidden because its container is hidden.
             * @param {boolean} visible True if visible.
             */
            setVisible(visible: boolean): void;
    
            /**
             * Set whether this flyout's container is visible.
             * @param {boolean} visible Whether the container is visible.
             */
            setContainerVisible(visible: boolean): void;
    
            /**
             * Update the display property of the flyout based whether it thinks it should
             * be visible and whether its containing workspace is visible.
             * @private
             */
            updateDisplay_(): void;
    
            /**
             * Update the view based on coordinates calculated in position().
             * @param {number} width The computed width of the flyout's SVG group
             * @param {number} height The computed height of the flyout's SVG group.
             * @param {number} x The computed x origin of the flyout's SVG group.
             * @param {number} y The computed y origin of the flyout's SVG group.
             * @private
             */
            positionAt_(width: number, height: number, x: number, y: number): void;
    
            /**
             * Hide and empty the flyout.
             */
            hide(): void;
    
            /**
             * Show and populate the flyout.
             * @param {!Array|string} xmlList List of blocks to show.
             *     Variables and procedures have a custom set of blocks.
             */
            show(xmlList: any[]|string): void;
    
            /**
             * Delete blocks, mats and buttons from a previous showing of the flyout.
             * @private
             */
            clearOldBlocks_(): void;
    
            /**
             * Add listeners to a block that has been added to the flyout.
             * @param {!Element} root The root node of the SVG group the block is in.
             * @param {!Blockly.Block} block The block to add listeners for.
             * @param {!Element} rect The invisible rectangle under the block that acts as
             *     a mat for that block.
             * @private
             */
            addBlockListeners_(root: Element, block: Blockly.Block, rect: Element): void;
    
            /**
             * Handle a mouse-down on an SVG block in a non-closing flyout.
             * @param {!Blockly.Block} block The flyout block to copy.
             * @return {!Function} Function to call when block is clicked.
             * @private
             */
            blockMouseDown_(block: Blockly.Block): Function;
    
            /**
             * Mouse down on the flyout background.  Start a vertical scroll drag.
             * @param {!Event} e Mouse down event.
             * @private
             */
            onMouseDown_(e: Event): void;
    
            /**
             * Create a copy of this block on the workspace.
             * @param {!Blockly.BlockSvg} originalBlock The block to copy from the flyout.
             * @return {Blockly.BlockSvg} The newly created block, or null if something
             *     went wrong with deserialization.
             * @package
             */
            createBlock(originalBlock: Blockly.BlockSvg): Blockly.BlockSvg;
    
            /**
             * Initialize the given button: move it to the correct location,
             * add listeners, etc.
             * @param {!Blockly.FlyoutButton} button The button to initialize and place.
             * @param {number} x The x position of the cursor during this layout pass.
             * @param {number} y The y position of the cursor during this layout pass.
             * @private
             */
            initFlyoutButton_(button: Blockly.FlyoutButton, x: number, y: number): void;
    
            /**
             * Create and place a rectangle corresponding to the given block.
             * @param {!Blockly.Block} block The block to associate the rect to.
             * @param {number} x The x position of the cursor during this layout pass.
             * @param {number} y The y position of the cursor during this layout pass.
             * @param {!{height: number, width: number}} blockHW The height and width of the
             *     block.
             * @param {number} index The index into the mats list where this rect should be
             *     placed.
             * @return {!SVGElement} Newly created SVG element for the rectangle behind the
             *     block.
             * @private
             */
            createRect_(block: Blockly.Block, x: number, y: number, blockHW: { height: number; width: number }, index: number): SVGElement;
    
            /**
             * Move a rectangle to sit exactly behind a block, taking into account tabs,
             * hats, and any other protrusions we invent.
             * @param {!SVGElement} rect The rectangle to move directly behind the block.
             * @param {!Blockly.BlockSvg} block The block the rectangle should be behind.
             * @private
             */
            moveRectToBlock_(rect: SVGElement, block: Blockly.BlockSvg): void;
    
            /**
             * Filter the blocks on the flyout to disable the ones that are above the
             * capacity limit.  For instance, if the user may only place two more blocks on
             * the workspace, an "a + b" block that has two shadow blocks would be disabled.
             * @private
             */
            filterForCapacity_(): void;
    
            /**
             * Reflow blocks and their mats.
             */
            reflow(): void;
    
            /**
             * @return {boolean} True if this flyout may be scrolled with a scrollbar or by
             *     dragging.
             * @package
             */
            isScrollable(): boolean;
    
            /**
             * Copy a block from the flyout to the workspace and position it correctly.
             * @param {!Blockly.Block} oldBlock The flyout block to copy.
             * @return {!Blockly.Block} The new block in the main workspace.
             * @private
             */
            placeNewBlock_(oldBlock: Blockly.Block): Blockly.Block;
    } 
    
}

declare module Blockly {

    class FlyoutButton extends FlyoutButton__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FlyoutButton__Class  { 
    
            /**
             * Class for a button in the flyout.
             * @param {!Blockly.WorkspaceSvg} workspace The workspace in which to place this
             *     button.
             * @param {!Blockly.WorkspaceSvg} targetWorkspace The flyout's target workspace.
             * @param {!Element} xml The XML specifying the label/button.
             * @param {boolean} isLabel Whether this button should be styled as a label.
             * @constructor
             */
            constructor(workspace: Blockly.WorkspaceSvg, targetWorkspace: Blockly.WorkspaceSvg, xml: Element, isLabel: boolean);
    
            /**
             * @type {!Blockly.WorkspaceSvg}
             * @private
             */
            workspace_: Blockly.WorkspaceSvg;
    
            /**
             * @type {!Blockly.Workspace}
             * @private
             */
            targetWorkspace_: Blockly.Workspace;
    
            /**
             * @type {string}
             * @private
             */
            text_: string;
    
            /**
             * @type {!goog.math.Coordinate}
             * @private
             */
            position_: goog.math.Coordinate;
    
            /**
             * Whether this button should be styled as a label.
             * @type {boolean}
             * @private
             */
            isLabel_: boolean;
    
            /**
             * Function to call when this button is clicked.
             * @type {function(!Blockly.FlyoutButton)}
             * @private
             */
            callback_: { (_0: Blockly.FlyoutButton): any /*missing*/ };
    
            /**
             * If specified, a CSS class to add to this button.
             * @type {?string}
             * @private
             */
            cssClass_: string;
    
            /**
             * The width of the button's rect.
             * @type {number}
             */
            width: number;
    
            /**
             * The height of the button's rect.
             * @type {number}
             */
            height: number;
    
            /**
             * Opaque data that can be passed to Blockly.unbindEvent_.
             * @type {Array.<!Array>}
             * @private
             */
            onMouseUpWrapper_: any[][];
    
            /**
             * Create the button elements.
             * @return {!Element} The button's SVG group.
             */
            createDom(): Element;
    
            /**
             * Correctly position the flyout button and make it visible.
             */
            show(): void;
    
            /**
             * Update SVG attributes to match internal state.
             * @private
             */
            updateTransform_(): void;
    
            /**
             * Move the button to the given x, y coordinates.
             * @param {number} x The new x coordinate.
             * @param {number} y The new y coordinate.
             */
            moveTo(x: number, y: number): void;
    
            /**
             * Location of the button.
             * @return {!goog.math.Coordinate} x, y coordinates.
             * @package
             */
            getPosition(): goog.math.Coordinate;
    
            /**
             * Get the button's target workspace.
             * @return {!Blockly.WorkspaceSvg} The target workspace of the flyout where this
             *     button resides.
             */
            getTargetWorkspace(): Blockly.WorkspaceSvg;
    
            /**
             * Dispose of this button.
             */
            dispose(): void;
    
            /**
             * Do something when the button is clicked.
             * @param {!Event} e Mouse up event.
             * @private
             */
            onMouseUp_(e: Event): void;
    } 
    
}

declare module Blockly.FlyoutButton {

    /**
     * The margin around the text in the button.
     */
    var MARGIN: any /*missing*/;
}

declare module Blockly {

    class FlyoutDragger extends FlyoutDragger__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FlyoutDragger__Class  { 
    
            /**
             * Class for a flyout dragger.  It moves a flyout workspace around when it is
             * being dragged by a mouse or touch.
             * Note that the workspace itself manages whether or not it has a drag surface
             * and how to do translations based on that.  This simply passes the right
             * commands based on events.
             * @param {!Blockly.Flyout} flyout The flyout to drag.
             * @constructor
             */
            constructor(flyout: Blockly.Flyout);
    
            /**
             * The scrollbar to update to move the flyout.
             * Unlike the main workspace, the flyout has only one scrollbar, in either the
             * horizontal or the vertical direction.
             * @type {!Blockly.Scrollbar}
             * @private
             */
            scrollbar_: Blockly.Scrollbar;
    
            /**
             * Whether the flyout scrolls horizontally.  If false, the flyout scrolls
             * vertically.
             * @type {boolean}
             * @private
             */
            horizontalLayout_: boolean;
    
            /**
             * Move the appropriate scrollbar to drag the flyout.
             * Since flyouts only scroll in one direction at a time, this will discard one
             * of the calculated values.
             * x and y are in pixels.
             * @param {number} x The new x position to move the scrollbar to.
             * @param {number} y The new y position to move the scrollbar to.
             * @private
             */
            updateScroll_(x: number, y: number): void;
    } 
    
}

declare module Blockly {

    class HorizontalFlyout extends HorizontalFlyout__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class HorizontalFlyout__Class extends Blockly.Flyout__Class  { 
    
            /**
             * Class for a flyout.
             * @param {!Object} workspaceOptions Dictionary of options for the workspace.
             * @extends {Blockly.Flyout}
             * @constructor
             */
            constructor(workspaceOptions: Object);
    
            /**
             * Flyout should be laid out horizontally.
             * @type {boolean}
             * @private
             */
            horizontalLayout_: boolean;
    
            /**
             * Return an object with all the metrics required to size scrollbars for the
             * flyout.  The following properties are computed:
             * .viewHeight: Height of the visible rectangle,
             * .viewWidth: Width of the visible rectangle,
             * .contentHeight: Height of the contents,
             * .contentWidth: Width of the contents,
             * .viewTop: Offset of top edge of visible rectangle from parent,
             * .contentTop: Offset of the top-most content from the y=0 coordinate,
             * .absoluteTop: Top-edge of view.
             * .viewLeft: Offset of the left edge of visible rectangle from parent,
             * .contentLeft: Offset of the left-most content from the x=0 coordinate,
             * .absoluteLeft: Left-edge of view.
             * @return {Object} Contains size and position metrics of the flyout.
             * @private
             */
            getMetrics_(): Object;
    
            /**
             * Sets the translation of the flyout to match the scrollbars.
             * @param {!Object} xyRatio Contains a y property which is a float
             *     between 0 and 1 specifying the degree of scrolling and a
             *     similar x property.
             * @private
             */
            setMetrics_(xyRatio: Object): void;
    
            /**
             * Move the flyout to the edge of the workspace.
             */
            position(): void;
    
            /**
             * Create and set the path for the visible boundaries of the flyout.
             * @param {number} width The width of the flyout, not including the
             *     rounded corners.
             * @param {number} height The height of the flyout, not including
             *     rounded corners.
             * @private
             */
            setBackgroundPath_(width: number, height: number): void;
    
            /**
             * Scroll the flyout to the top.
             */
            scrollToStart(): void;
    
            /**
             * Scroll the flyout.
             * @param {!Event} e Mouse wheel scroll event.
             * @private
             */
            wheel_(e: Event): void;
    
            /**
             * Lay out the blocks in the flyout.
             * @param {!Array.<!Object>} contents The blocks and buttons to lay out.
             * @param {!Array.<number>} gaps The visible gaps between blocks.
             * @private
             */
            layout_(contents: Object[], gaps: number[]): void;
    
            /**
             * Determine if a drag delta is toward the workspace, based on the position
             * and orientation of the flyout. This is used in determineDragIntention_ to
             * determine if a new block should be created or if the flyout should scroll.
             * @param {!goog.math.Coordinate} currentDragDeltaXY How far the pointer has
             *     moved from the position at mouse down, in pixel units.
             * @return {boolean} true if the drag is toward the workspace.
             * @package
             */
            isDragTowardWorkspace(currentDragDeltaXY: goog.math.Coordinate): boolean;
    
            /**
             * Return the deletion rectangle for this flyout in viewport coordinates.
             * @return {goog.math.Rect} Rectangle in which to delete.
             */
            getClientRect(): goog.math.Rect;
    
            /**
             * Compute height of flyout.  Position mat under each block.
             * For RTL: Lay out the blocks right-aligned.
             * @private
             */
            reflowInternal_(): void;
    } 
    
}

declare module Blockly {

    class VerticalFlyout extends VerticalFlyout__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class VerticalFlyout__Class extends Blockly.Flyout__Class  { 
    
            /**
             * Class for a flyout.
             * @param {!Object} workspaceOptions Dictionary of options for the workspace.
             * @extends {Blockly.Flyout}
             * @constructor
             */
            constructor(workspaceOptions: Object);
    
            /**
             * Flyout should be laid out vertically.
             * @type {boolean}
             * @private
             */
            horizontalLayout_: boolean;
    
            /**
             * Return an object with all the metrics required to size scrollbars for the
             * flyout.  The following properties are computed:
             * .viewHeight: Height of the visible rectangle,
             * .viewWidth: Width of the visible rectangle,
             * .contentHeight: Height of the contents,
             * .contentWidth: Width of the contents,
             * .viewTop: Offset of top edge of visible rectangle from parent,
             * .contentTop: Offset of the top-most content from the y=0 coordinate,
             * .absoluteTop: Top-edge of view.
             * .viewLeft: Offset of the left edge of visible rectangle from parent,
             * .contentLeft: Offset of the left-most content from the x=0 coordinate,
             * .absoluteLeft: Left-edge of view.
             * @return {Object} Contains size and position metrics of the flyout.
             * @private
             */
            getMetrics_(): Object;
    
            /**
             * Sets the translation of the flyout to match the scrollbars.
             * @param {!Object} xyRatio Contains a y property which is a float
             *     between 0 and 1 specifying the degree of scrolling and a
             *     similar x property.
             * @private
             */
            setMetrics_(xyRatio: Object): void;
    
            /**
             * Move the flyout to the edge of the workspace.
             */
            position(): void;
    
            /**
             * Create and set the path for the visible boundaries of the flyout.
             * @param {number} width The width of the flyout, not including the
             *     rounded corners.
             * @param {number} height The height of the flyout, not including
             *     rounded corners.
             * @private
             */
            setBackgroundPath_(width: number, height: number): void;
    
            /**
             * Scroll the flyout to the top.
             */
            scrollToStart(): void;
    
            /**
             * Scroll the flyout.
             * @param {!Event} e Mouse wheel scroll event.
             * @private
             */
            wheel_(e: Event): void;
    
            /**
             * Lay out the blocks in the flyout.
             * @param {!Array.<!Object>} contents The blocks and buttons to lay out.
             * @param {!Array.<number>} gaps The visible gaps between blocks.
             * @private
             */
            layout_(contents: Object[], gaps: number[]): void;
    
            /**
             * Determine if a drag delta is toward the workspace, based on the position
             * and orientation of the flyout. This is used in determineDragIntention_ to
             * determine if a new block should be created or if the flyout should scroll.
             * @param {!goog.math.Coordinate} currentDragDeltaXY How far the pointer has
             *     moved from the position at mouse down, in pixel units.
             * @return {boolean} true if the drag is toward the workspace.
             * @package
             */
            isDragTowardWorkspace(currentDragDeltaXY: goog.math.Coordinate): boolean;
    
            /**
             * Return the deletion rectangle for this flyout in viewport coordinates.
             * @return {goog.math.Rect} Rectangle in which to delete.
             */
            getClientRect(): goog.math.Rect;
    
            /**
             * Compute width of flyout.  Position mat under each block.
             * For RTL: Lay out the blocks and buttons to be right-aligned.
             * @private
             */
            reflowInternal_(): void;
    } 
    
}

declare module Blockly {

    class Generator extends Generator__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Generator__Class  { 
    
            /**
             * Class for a code generator that translates the blocks into a language.
             * @param {string} name Language name of this generator.
             * @constructor
             */
            constructor(name: string);
    
            /**
             * Arbitrary code to inject into locations that risk causing infinite loops.
             * Any instances of '%1' will be replaced by the block ID that failed.
             * E.g. '  checkTimeout(%1);\n'
             * @type {?string}
             */
            INFINITE_LOOP_TRAP: string;
    
            /**
             * Arbitrary code to inject before every statement.
             * Any instances of '%1' will be replaced by the block ID of the statement.
             * E.g. 'highlight(%1);\n'
             * @type {?string}
             */
            STATEMENT_PREFIX: string;
    
            /**
             * The method of indenting.  Defaults to two spaces, but language generators
             * may override this to increase indent or change to tabs.
             * @type {string}
             */
            INDENT: string;
    
            /**
             * Maximum length for a comment before wrapping.  Does not account for
             * indenting level.
             * @type {number}
             */
            COMMENT_WRAP: number;
    
            /**
             * List of outer-inner pairings that do NOT require parentheses.
             * @type {!Array.<!Array.<number>>}
             */
            ORDER_OVERRIDES: number[][];
    
            /**
             * Generate code for all blocks in the workspace to the specified language.
             * @param {Blockly.Workspace} workspace Workspace to generate code from.
             * @return {string} Generated code.
             */
            workspaceToCode(workspace: Blockly.Workspace): string;
    
            /**
             * Prepend a common prefix onto each line of code.
             * @param {string} text The lines of code.
             * @param {string} prefix The common prefix.
             * @return {string} The prefixed lines of code.
             */
            prefixLines(text: string, prefix: string): string;
    
            /**
             * Recursively spider a tree of blocks, returning all their comments.
             * @param {!Blockly.Block} block The block from which to start spidering.
             * @return {string} Concatenated list of comments.
             */
            allNestedComments(block: Blockly.Block): string;
    
            /**
             * Generate code for the specified block (and attached blocks).
             * @param {Blockly.Block} block The block to generate code for.
             * @return {string|!Array} For statement blocks, the generated code.
             *     For value blocks, an array containing the generated code and an
             *     operator order value.  Returns '' if block is null.
             */
            blockToCode(block: Blockly.Block): string|any[];
    
            /**
             * Generate code representing the specified value input.
             * @param {!Blockly.Block} block The block containing the input.
             * @param {string} name The name of the input.
             * @param {number} outerOrder The maximum binding strength (minimum order value)
             *     of any operators adjacent to "block".
             * @return {string} Generated code or '' if no blocks are connected or the
             *     specified input does not exist.
             */
            valueToCode(block: Blockly.Block, name: string, outerOrder: number): string;
    
            /**
             * Generate code representing the statement.  Indent the code.
             * @param {!Blockly.Block} block The block containing the input.
             * @param {string} name The name of the input.
             * @return {string} Generated code or '' if no blocks are connected.
             */
            statementToCode(block: Blockly.Block, name: string): string;
    
            /**
             * Add an infinite loop trap to the contents of a loop.
             * If loop is empty, add a statment prefix for the loop block.
             * @param {string} branch Code for loop contents.
             * @param {string} id ID of enclosing block.
             * @return {string} Loop contents, with infinite loop trap added.
             */
            addLoopTrap(branch: string, id: string): string;
    
            /**
             * Comma-separated list of reserved words.
             * @type {string}
             * @private
             */
            RESERVED_WORDS_: string;
    
            /**
             * Add one or more words to the list of reserved words for this language.
             * @param {string} words Comma-separated list of words to add to the list.
             *     No spaces.  Duplicates are ok.
             */
            addReservedWords(words: string): void;
    
            /**
             * This is used as a placeholder in functions defined using
             * Blockly.Generator.provideFunction_.  It must not be legal code that could
             * legitimately appear in a function definition (or comment), and it must
             * not confuse the regular expression parser.
             * @type {string}
             * @private
             */
            FUNCTION_NAME_PLACEHOLDER_: string;
    
            /**
             * Define a function to be included in the generated code.
             * The first time this is called with a given desiredName, the code is
             * saved and an actual name is generated.  Subsequent calls with the
             * same desiredName have no effect but have the same return value.
             *
             * It is up to the caller to make sure the same desiredName is not
             * used for different code values.
             *
             * The code gets output when Blockly.Generator.finish() is called.
             *
             * @param {string} desiredName The desired name of the function (e.g., isPrime).
             * @param {!Array.<string>} code A list of statements.  Use '  ' for indents.
             * @return {string} The actual name of the new function.  This may differ
             *     from desiredName if the former has already been taken by the user.
             * @private
             */
            provideFunction_(desiredName: string, code: string[]): string;
    
            /**
             * Hook for code to run before code generation starts.
             * Subclasses may override this, e.g. to initialise the database of variable
             * names.
             * @param {!Blockly.Workspace} workspace Workspace to generate code from.
             */
            init(workspace: Blockly.Workspace): void;
    
            /**
             * Common tasks for generating code from blocks.  This is called from
             * blockToCode and is called on every block, not just top level blocks.
             * Subclasses may override this, e.g. to generate code for statements following
             * the block, or to handle comments for the specified block and any connected
             * value blocks.
             * @param {!Blockly.Block} block The current block.
             * @param {string} code The JavaScript code created for this block.
             * @return {string} JavaScript code with comments and subsequent blocks added.
             * @private
             */
            scrub_(block: Blockly.Block, code: string): string;
    
            /**
             * Hook for code to run at end of code generation.
             * Subclasses may override this, e.g. to prepend the generated code with the
             * variable definitions.
             * @param {string} code Generated code.
             * @return {string} Completed code.
             */
            finish(code: string): string;
    
            /**
             * Naked values are top-level blocks with outputs that aren't plugged into
             * anything.
             * Subclasses may override this, e.g. if their language does not allow
             * naked values.
             * @param {string} line Line of generated code.
             * @return {string} Legal line of code.
             */
            scrubNakedValue(line: string): string;
    } 
    
}

declare module Blockly.Generator {

    /**
     * Category to separate generated function names from variables and procedures.
     */
    var NAME_TYPE: any /*missing*/;
}

declare module Blockly {

    class Gesture extends Gesture__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Gesture__Class  { 
    
            /**
             * Class for one gesture.
             * @param {!Event} e The event that kicked off this gesture.
             * @param {!Blockly.WorkspaceSvg} creatorWorkspace The workspace that created
             *     this gesture and has a reference to it.
             * @constructor
             */
            constructor(e: Event, creatorWorkspace: Blockly.WorkspaceSvg);
    
            /**
             * The position of the mouse when the gesture started.  Units are css pixels,
             * with (0, 0) at the top left of the browser window (mouseEvent clientX/Y).
             * @type {goog.math.Coordinate}
             */
            mouseDownXY_: goog.math.Coordinate;
    
            /**
             * How far the mouse has moved during this drag, in pixel units.
             * (0, 0) is at this.mouseDownXY_.
             * @type {goog.math.Coordinate}
             * private
             */
            currentDragDeltaXY_: goog.math.Coordinate;
    
            /**
             * The field that the gesture started on, or null if it did not start on a
             * field.
             * @type {Blockly.Field}
             * @private
             */
            startField_: Blockly.Field;
    
            /**
             * The block that the gesture started on, or null if it did not start on a
             * block.
             * @type {Blockly.BlockSvg}
             * @private
             */
            startBlock_: Blockly.BlockSvg;
    
            /**
             * The block that this gesture targets.  If the gesture started on a
             * shadow block, this is the first non-shadow parent of the block.  If the
             * gesture started in the flyout, this is the root block of the block group
             * that was clicked or dragged.
             * @type {Blockly.BlockSvg}
             * @private
             */
            targetBlock_: Blockly.BlockSvg;
    
            /**
             * The workspace that the gesture started on.  There may be multiple
             * workspaces on a page; this is more accurate than using
             * Blockly.getMainWorkspace().
             * @type {Blockly.WorkspaceSvg}
             * @private
             */
            startWorkspace_: Blockly.WorkspaceSvg;
    
            /**
             * The workspace that created this gesture.  This workspace keeps a reference
             * to the gesture, which will need to be cleared at deletion.
             * This may be different from the start workspace.  For instance, a flyout is
             * a workspace, but its parent workspace manages gestures for it.
             * @type {Blockly.WorkspaceSvg}
             * @private
             */
            creatorWorkspace_: Blockly.WorkspaceSvg;
    
            /**
             * Whether the pointer has at any point moved out of the drag radius.
             * A gesture that exceeds the drag radius is a drag even if it ends exactly at
             * its start point.
             * @type {boolean}
             * @private
             */
            hasExceededDragRadius_: boolean;
    
            /**
             * Whether the workspace is currently being dragged.
             * @type {boolean}
             * @private
             */
            isDraggingWorkspace_: boolean;
    
            /**
             * Whether the block is currently being dragged.
             * @type {boolean}
             * @private
             */
            isDraggingBlock_: boolean;
    
            /**
             * The event that most recently updated this gesture.
             * @type {!Event}
             * @private
             */
            mostRecentEvent_: Event;
    
            /**
             * A handle to use to unbind a mouse move listener at the end of a drag.
             * Opaque data returned from Blockly.bindEventWithChecks_.
             * @type {Array.<!Array>}
             * @private
             */
            onMoveWrapper_: any[][];
    
            /**
             * A handle to use to unbind a mouse up listener at the end of a drag.
             * Opaque data returned from Blockly.bindEventWithChecks_.
             * @type {Array.<!Array>}
             * @private
             */
            onUpWrapper_: any[][];
    
            /**
             * The object tracking a block drag, or null if none is in progress.
             * @type {Blockly.BlockDragger}
             * @private
             */
            blockDragger_: Blockly.BlockDragger;
    
            /**
             * The object tracking a workspace or flyout workspace drag, or null if none
             * is in progress.
             * @type {Blockly.WorkspaceDragger}
             * @private
             */
            workspaceDragger_: Blockly.WorkspaceDragger;
    
            /**
             * The flyout a gesture started in, if any.
             * @type {Blockly.Flyout}
             * @private
             */
            flyout_: Blockly.Flyout;
    
            /**
             * Boolean for sanity-checking that some code is only called once.
             * @type {boolean}
             * @private
             */
            calledUpdateIsDragging_: boolean;
    
            /**
             * Boolean for sanity-checking that some code is only called once.
             * @type {boolean}
             * @private
             */
            hasStarted_: boolean;
    
            /**
             * Boolean used internally to break a cycle in disposal.
             * @type {boolean}
             * @private
             */
            isEnding_: boolean;
    
            /**
             * Sever all links from this object.
             * @package
             */
            dispose(): void;
    
            /**
             * Update internal state based on an event.
             * @param {!Event} e The most recent mouse or touch event.
             * @private
             */
            updateFromEvent_(e: Event): void;
    
            /**
             * DO MATH to set currentDragDeltaXY_ based on the most recent mouse position.
             * @param {!goog.math.Coordinate} currentXY The most recent mouse/pointer
             *     position, in pixel units, with (0, 0) at the window's top left corner.
             * @return {boolean} True if the drag just exceeded the drag radius for the
             *     first time.
             * @private
             */
            updateDragDelta_(currentXY: goog.math.Coordinate): boolean;
    
            /**
             * Update this gesture to record whether a block is being dragged from the
             * flyout.
             * This function should be called on a mouse/touch move event the first time the
             * drag radius is exceeded.  It should be called no more than once per gesture.
             * If a block should be dragged from the flyout this function creates the new
             * block on the main workspace and updates targetBlock_ and startWorkspace_.
             * @return {boolean} True if a block is being dragged from the flyout.
             * @private
             */
            updateIsDraggingFromFlyout_(): boolean;
    
            /**
             * Update this gesture to record whether a block is being dragged.
             * This function should be called on a mouse/touch move event the first time the
             * drag radius is exceeded.  It should be called no more than once per gesture.
             * If a block should be dragged, either from the flyout or in the workspace,
             * this function creates the necessary BlockDragger and starts the drag.
             * @return {boolean} true if a block is being dragged.
             * @private
             */
            updateIsDraggingBlock_(): boolean;
    
            /**
             * Update this gesture to record whether a workspace is being dragged.
             * This function should be called on a mouse/touch move event the first time the
             * drag radius is exceeded.  It should be called no more than once per gesture.
             * If a workspace is being dragged this function creates the necessary
             * WorkspaceDragger or FlyoutDragger and starts the drag.
             * @private
             */
            updateIsDraggingWorkspace_(): void;
    
            /**
             * Update this gesture to record whether anything is being dragged.
             * This function should be called on a mouse/touch move event the first time the
             * drag radius is exceeded.  It should be called no more than once per gesture.
             * @private
             */
            updateIsDragging_(): void;
    
            /**
             * Create a block dragger and start dragging the selected block.
             * @private
             */
            startDraggingBlock_(): void;
    
            /**
             * Start a gesture: update the workspace to indicate that a gesture is in
             * progress and bind mousemove and mouseup handlers.
             * @param {!Event} e A mouse down or touch start event.
             * @package
             */
            doStart(e: Event): void;
    
            /**
             * Handle a mouse move or touch move event.
             * @param {!Event} e A mouse move or touch move event.
             * @package
             */
            handleMove(e: Event): void;
    
            /**
             * Handle a mouse up or touch end event.
             * @param {!Event} e A mouse up or touch end event.
             * @package
             */
            handleUp(e: Event): void;
    
            /**
             * Cancel an in-progress gesture.  If a workspace or block drag is in progress,
             * end the drag at the most recent location.
             * @package
             */
            cancel(): void;
    
            /**
             * Handle a real or faked right-click event by showing a context menu.
             * @param {!Event} e A mouse move or touch move event.
             * @package
             */
            handleRightClick(e: Event): void;
    
            /**
             * Handle a mousedown/touchstart event on a workspace.
             * @param {!Event} e A mouse down or touch start event.
             * @param {!Blockly.Workspace} ws The workspace the event hit.
             * @package
             */
            handleWsStart(e: Event, ws: Blockly.Workspace): void;
    
            /**
             * Handle a mousedown/touchstart event on a flyout.
             * @param {!Event} e A mouse down or touch start event.
             * @param {!Blockly.Flyout} flyout The flyout the event hit.
             * @package
             */
            handleFlyoutStart(e: Event, flyout: Blockly.Flyout): void;
    
            /**
             * Handle a mousedown/touchstart event on a block.
             * @param {!Event} e A mouse down or touch start event.
             * @param {!Blockly.BlockSvg} block The block the event hit.
             * @package
             */
            handleBlockStart(e: Event, block: Blockly.BlockSvg): void;
    
            /**
             * Execute a field click.
             * @private
             */
            doFieldClick_(): void;
    
            /**
             * Execute a block click.
             * @private
             */
            doBlockClick_(): void;
    
            /**
             * Execute a workspace click.
             * @private
             */
            doWorkspaceClick_(): void;
    
            /**
             * Move the dragged/clicked block to the front of the workspace so that it is
             * not occluded by other blocks.
             * @private
             */
            bringBlockToFront_(): void;
    
            /**
             * Record the field that a gesture started on.
             * @param {Blockly.Field} field The field the gesture started on.
             * @package
             */
            setStartField(field: Blockly.Field): void;
    
            /**
             * Record the block that a gesture started on, and set the target block
             * appropriately.
             * @param {Blockly.BlockSvg} block The block the gesture started on.
             * @package
             */
            setStartBlock(block: Blockly.BlockSvg): void;
    
            /**
             * Record the block that a gesture targets, meaning the block that will be
             * dragged if this turns into a drag.  If this block is a shadow, that will be
             * its first non-shadow parent.
             * @param {Blockly.BlockSvg} block The block the gesture targets.
             * @private
             */
            setTargetBlock_(block: Blockly.BlockSvg): void;
    
            /**
             * Record the workspace that a gesture started on.
             * @param {Blockly.WorkspaceSvg} ws The workspace the gesture started on.
             * @private
             */
            setStartWorkspace_(ws: Blockly.WorkspaceSvg): void;
    
            /**
             * Record the flyout that a gesture started on.
             * @param {Blockly.Flyout} flyout The flyout the gesture started on.
             * @private
             */
            setStartFlyout_(flyout: Blockly.Flyout): void;
    
            /**
             * Whether this gesture is a click on a block.  This should only be called when
             * ending a gesture (mouse up, touch end).
             * @return {boolean} whether this gesture was a click on a block.
             * @private
             */
            isBlockClick_(): boolean;
    
            /**
             * Whether this gesture is a click on a field.  This should only be called when
             * ending a gesture (mouse up, touch end).
             * @return {boolean} whether this gesture was a click on a field.
             * @private
             */
            isFieldClick_(): boolean;
    
            /**
             * Whether this gesture is a click on a workspace.  This should only be called
             * when ending a gesture (mouse up, touch end).
             * @return {boolean} whether this gesture was a click on a workspace.
             * @private
             */
            isWorkspaceClick_(): boolean;
    
            /**
             * Whether this gesture is a drag of either a workspace or block.
             * This function is called externally to block actions that cannot be taken
             * mid-drag (e.g. using the keyboard to delete the selected blocks).
             * @return {boolean} true if this gesture is a drag of a workspace or block.
             * @package
             */
            isDragging(): boolean;
    
            /**
             * Whether this gesture has already been started.  In theory every mouse down
             * has a corresponding mouse up, but in reality it is possible to lose a
             * mouse up, leaving an in-process gesture hanging.
             * @return {boolean} whether this gesture was a click on a workspace.
             * @package
             */
            hasStarted(): boolean;
    } 
    
}

declare module Blockly {

    class Grid extends Grid__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Grid__Class  { 
    
            /**
             * Class for a workspace's grid.
             * @param {!SVGElement} pattern The grid's SVG pattern, created during injection.
             * @param {!Object} options A dictionary of normalized options for the grid.
             *     See grid documentation:
             *     https://developers.google.com/blockly/guides/configure/web/grid
             * @constructor
             */
            constructor(pattern: SVGElement, options: Object);
    
            /**
             * The grid's SVG pattern, created during injection.
             * @type {!SVGElement}
             * @private
             */
            gridPattern_: SVGElement;
    
            /**
             * The spacing of the grid lines (in px).
             * @type {number}
             * @private
             */
            spacing_: number;
    
            /**
             * How long the grid lines should be (in px).
             * @type {number}
             * @private
             */
            length_: number;
    
            /**
             * The horizontal grid line, if it exists.
             * @type {SVGElement}
             * @private
             */
            line1_: SVGElement;
    
            /**
             * The vertical grid line, if it exists.
             * @type {SVGElement}
             * @private
             */
            line2_: SVGElement;
    
            /**
             * Whether blocks should snap to the grid.
             * @type {boolean}
             * @private
             */
            snapToGrid_: boolean;
    
            /**
             * The scale of the grid, used to set stroke width on grid lines.
             * This should always be the same as the workspace scale.
             * @type {number}
             * @private
             */
            scale_: number;
    
            /**
             * Dispose of this grid and unlink from the DOM.
             * @package
             */
            dispose(): void;
    
            /**
             * Whether blocks should snap to the grid, based on the initial configuration.
             * @return {boolean} True if blocks should snap, false otherwise.
             * @package
             */
            shouldSnap(): boolean;
    
            /**
             * Get the spacing of the grid points (in px).
             * @return {number} The spacing of the grid points.
             * @package
             */
            getSpacing(): number;
    
            /**
             * Get the id of the pattern element, which should be randomized to avoid
             * conflicts with other Blockly instances on the page.
             * @return {string} The pattern ID.
             * @package
             */
            getPatternId(): string;
    
            /**
             * Update the grid with a new scale.
             * @param {number} scale The new workspace scale.
             * @package
             */
            update(scale: number): void;
    
            /**
             * Set the attributes on one of the lines in the grid.  Use this to update the
             * length and stroke width of the grid lines.
             * @param {!SVGElement} line Which line to update.
             * @param {number} width The new stroke size (in px).
             * @param {number} x1 The new x start position of the line (in px).
             * @param {number} x2 The new x end position of the line (in px).
             * @param {number} y1 The new y start position of the line (in px).
             * @param {number} y2 The new y end position of the line (in px).
             * @private
             */
            setLineAttributes_(line: SVGElement, width: number, x1: number, x2: number, y1: number, y2: number): void;
    
            /**
             * Move the grid to a new x and y position, and make sure that change is visible.
             * @param {number} x The new x position of the grid (in px).
             * @param {number} y The new y position ofthe grid (in px).
             * @package
             */
            moveTo(x: number, y: number): void;
    } 
    
}

declare module Blockly.Grid {

    /**
     * Create the DOM for the grid described by options.
     * @param {string} rnd A random ID to append to the pattern's ID.
     * @param {!Object} gridOptions The object containing grid configuration.
     * @param {!SVGElement} defs The root SVG element for this workspace's defs.
     * @return {!SVGElement} The SVG element for the grid pattern.
     * @package
     */
    function createDom(rnd: string, gridOptions: Object, defs: SVGElement): SVGElement;
}

declare module Blockly {

    class Icon extends Icon__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Icon__Class  { 
    
            /**
             * Class for an icon.
             * @param {Blockly.Block} block The block associated with this icon.
             * @constructor
             */
            constructor(block: Blockly.Block);
    
            /**
             * Does this icon get hidden when the block is collapsed.
             */
            collapseHidden: any /*missing*/;
    
            /**
             * Height and width of icons.
             */
            SIZE: any /*missing*/;
    
            /**
             * Bubble UI (if visible).
             * @type {Blockly.Bubble}
             * @private
             */
            bubble_: Blockly.Bubble;
    
            /**
             * Absolute coordinate of icon's center.
             * @type {goog.math.Coordinate}
             * @private
             */
            iconXY_: goog.math.Coordinate;
    
            /**
             * Create the icon on the block.
             */
            createIcon(): void;
    
            /**
             * Dispose of this icon.
             */
            dispose(): void;
    
            /**
             * Add or remove the UI indicating if this icon may be clicked or not.
             */
            updateEditable(): void;
    
            /**
             * Is the associated bubble visible?
             * @return {boolean} True if the bubble is visible.
             */
            isVisible(): boolean;
    
            /**
             * Clicking on the icon toggles if the bubble is visible.
             * @param {!Event} e Mouse click event.
             * @private
             */
            iconClick_(e: Event): void;
    
            /**
             * Change the colour of the associated bubble to match its block.
             */
            updateColour(): void;
    
            /**
             * Render the icon.
             * @param {number} cursorX Horizontal offset at which to position the icon.
             * @return {number} Horizontal offset for next item to draw.
             */
            renderIcon(cursorX: number): number;
    
            /**
             * Notification that the icon has moved.  Update the arrow accordingly.
             * @param {!goog.math.Coordinate} xy Absolute location in workspace coordinates.
             */
            setIconLocation(xy: goog.math.Coordinate): void;
    
            /**
             * Notification that the icon has moved, but we don't really know where.
             * Recompute the icon's location from scratch.
             */
            computeIconLocation(): void;
    
            /**
             * Returns the center of the block's icon relative to the surface.
             * @return {!goog.math.Coordinate} Object with x and y properties in workspace
             *     coordinates.
             */
            getIconLocation(): goog.math.Coordinate;
    } 
    
}

declare module Blockly {

    /**
     * Inject a Blockly editor into the specified container element (usually a div).
     * @param {!Element|string} container Containing element, or its ID,
     *     or a CSS selector.
     * @param {Object=} opt_options Optional dictionary of options.
     * @return {!Blockly.Workspace} Newly created main workspace.
     */
    function inject(container: Element|string, opt_options?: Object): Blockly.Workspace;

    /**
     * Create the SVG image.
     * @param {!Element} container Containing element.
     * @param {!Blockly.Options} options Dictionary of options.
     * @return {!Element} Newly created SVG image.
     * @private
     */
    function createDom_(container: Element, options: Blockly.Options): Element;

    /**
     * Create a main workspace and add it to the SVG.
     * @param {!Element} svg SVG element with pattern defined.
     * @param {!Blockly.Options} options Dictionary of options.
     * @param {!Blockly.BlockDragSurfaceSvg} blockDragSurface Drag surface SVG
     *     for the blocks.
     * @param {!Blockly.WorkspaceDragSurfaceSvg} workspaceDragSurface Drag surface
     *     SVG for the workspace.
     * @return {!Blockly.Workspace} Newly created main workspace.
     * @private
     */
    function createMainWorkspace_(svg: Element, options: Blockly.Options, blockDragSurface: Blockly.BlockDragSurfaceSvg, workspaceDragSurface: Blockly.WorkspaceDragSurfaceSvg): Blockly.Workspace;

    /**
     * Initialize Blockly with various handlers.
     * @param {!Blockly.Workspace} mainWorkspace Newly created main workspace.
     * @private
     */
    function init_(mainWorkspace: Blockly.Workspace): void;

    /**
     * Modify the block tree on the existing toolbox.
     * @param {Node|string} tree DOM tree of blocks, or text representation of same.
     * @deprecated April 2015
     */
    function updateToolbox(tree: Node|string): void;
}

declare module Blockly.inject {

    /**
     * Bind document events, but only once.  Destroying and reinjecting Blockly
     * should not bind again.
     * Bind events for scrolling the workspace.
     * Most of these events should be bound to the SVG's surface.
     * However, 'mouseup' has to be on the whole document so that a block dragged
     * out of bounds and released will know that it has been released.
     * Also, 'keydown' has to be on the whole document since the browser doesn't
     * understand a concept of focus on the SVG image.
     * @private
     */
    function bindDocumentEvents_(): void;

    /**
     * Load sounds for the given workspace.
     * @param {string} pathToMedia The path to the media directory.
     * @param {!Blockly.Workspace} workspace The workspace to load sounds for.
     * @private
     */
    function loadSounds_(pathToMedia: string, workspace: Blockly.Workspace): void;
}

declare module Blockly {

    class Input extends Input__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Input__Class  { 
    
            /**
             * Class for an input with an optional field.
             * @param {number} type The type of the input.
             * @param {string} name Language-neutral identifier which may used to find this
             *     input again.
             * @param {!Blockly.Block} block The block containing this input.
             * @param {Blockly.Connection} connection Optional connection for this input.
             * @constructor
             */
            constructor(type: number, name: string, block: Blockly.Block, connection: Blockly.Connection);
    
            /** @type {number} */
            type: number;
    
            /** @type {string} */
            name: string;
    
            /**
             * @type {!Blockly.Block}
             * @private
             */
            sourceBlock_: Blockly.Block;
    
            /** @type {Blockly.Connection} */
            connection: Blockly.Connection;
    
            /** @type {!Array.<!Blockly.Field>} */
            fieldRow: Blockly.Field[];
    
            /**
             * Alignment of input's fields (left, right or centre).
             * @type {number}
             */
            align: number;
    
            /**
             * Is the input visible?
             * @type {boolean}
             * @private
             */
            visible_: boolean;
    
            /**
             * Add a field (or label from string), and all prefix and suffix fields, to the
             * end of the input's field row.
             * @param {string|!Blockly.Field} field Something to add as a field.
             * @param {string=} opt_name Language-neutral identifier which may used to find
             *     this field again.  Should be unique to the host block.
             * @return {!Blockly.Input} The input being append to (to allow chaining).
             */
            appendField(field: string|Blockly.Field, opt_name?: string): Blockly.Input;
    
            /**
             * Inserts a field (or label from string), and all prefix and suffix fields, at
             * the location of the input's field row.
             * @param {number} index The index at which to insert field.
             * @param {string|!Blockly.Field} field Something to add as a field.
             * @param {string=} opt_name Language-neutral identifier which may used to find
             *     this field again.  Should be unique to the host block.
             * @return {number} The index following the last inserted field.
             */
            insertFieldAt(index: number, field: string|Blockly.Field, opt_name?: string): number;
    
            /**
             * Remove a field from this input.
             * @param {string} name The name of the field.
             * @throws {goog.asserts.AssertionError} if the field is not present.
             */
            removeField(name: string): void;
    
            /**
             * Gets whether this input is visible or not.
             * @return {boolean} True if visible.
             */
            isVisible(): boolean;
    
            /**
             * Sets whether this input is visible or not.
             * Used to collapse/uncollapse a block.
             * @param {boolean} visible True if visible.
             * @return {!Array.<!Blockly.Block>} List of blocks to render.
             */
            setVisible(visible: boolean): Blockly.Block[];
    
            /**
             * Change a connection's compatibility.
             * @param {string|Array.<string>|null} check Compatible value type or
             *     list of value types.  Null if all types are compatible.
             * @return {!Blockly.Input} The input being modified (to allow chaining).
             */
            setCheck(check: string|string[]|any /*null*/): Blockly.Input;
    
            /**
             * Change the alignment of the connection's field(s).
             * @param {number} align One of Blockly.ALIGN_LEFT, ALIGN_CENTRE, ALIGN_RIGHT.
             *   In RTL mode directions are reversed, and ALIGN_RIGHT aligns to the left.
             * @return {!Blockly.Input} The input being modified (to allow chaining).
             */
            setAlign(align: number): Blockly.Input;
    
            /**
             * Initialize the fields on this input.
             */
            init(): void;
    
            /**
             * Sever all links to this input.
             */
            dispose(): void;
    } 
    
}

declare module goog {

    /**
     * Back up original getMsg function.
     * @type {!Function}
     */
    var getMsgOrig: Function;

    /**
     * Gets a localized message.
     * Overrides the default Closure function to check for a Blockly.Msg first.
     * Used infrequently, only known case is TODAY button in date picker.
     * @param {string} str Translatable string, places holders in the form {$foo}.
     * @param {Object.<string, string>=} opt_values Maps place holder name to value.
     * @return {string} message with placeholders filled.
     * @suppress {duplicate}
     */
    function getMsg(str: string, opt_values?: { [key: string]: string }): string;
}

declare module goog.getMsg {

    /**
     * Mapping of Closure messages to Blockly.Msg names.
     */
    var blocklyMsgMap: any /*missing*/;
}

declare module Blockly {

    class Mutator extends Mutator__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Mutator__Class extends Blockly.Icon__Class  { 
    
            /**
             * Class for a mutator dialog.
             * @param {!Array.<string>} quarkNames List of names of sub-blocks for flyout.
             * @extends {Blockly.Icon}
             * @constructor
             */
            constructor(quarkNames: string[]);
    
            /**
             * Width of workspace.
             * @private
             */
            workspaceWidth_: any /*missing*/;
    
            /**
             * Height of workspace.
             * @private
             */
            workspaceHeight_: any /*missing*/;
    
            /**
             * Draw the mutator icon.
             * @param {!Element} group The icon group.
             * @private
             */
            drawIcon_(group: Element): void;
    
            /**
             * Create the editor for the mutator's bubble.
             * @return {!Element} The top-level node of the editor.
             * @private
             */
            createEditor_(): Element;
    
            /**
             * Add or remove the UI indicating if this icon may be clicked or not.
             */
            updateEditable(): void;
    
            /**
             * Callback function triggered when the bubble has resized.
             * Resize the workspace accordingly.
             * @private
             */
            resizeBubble_(): void;
    
            /**
             * Show or hide the mutator bubble.
             * @param {boolean} visible True if the bubble should be visible.
             */
            setVisible(visible: boolean): void;
    
            /**
             * Update the source block when the mutator's blocks are changed.
             * Bump down any block that's too high.
             * Fired whenever a change is made to the mutator's workspace.
             * @private
             */
            workspaceChanged_(): void;
    
            /**
             * Return an object with all the metrics required to size scrollbars for the
             * mutator flyout.  The following properties are computed:
             * .viewHeight: Height of the visible rectangle,
             * .viewWidth: Width of the visible rectangle,
             * .absoluteTop: Top-edge of view.
             * .absoluteLeft: Left-edge of view.
             * @return {!Object} Contains size and position metrics of mutator dialog's
             *     workspace.
             * @private
             */
            getFlyoutMetrics_(): Object;
    
            /**
             * Dispose of this mutator.
             */
            dispose(): void;
    } 
    
}

declare module Blockly.Mutator {

    /**
     * Reconnect an block to a mutated input.
     * @param {Blockly.Connection} connectionChild Connection on child block.
     * @param {!Blockly.Block} block Parent block.
     * @param {string} inputName Name of input on parent block.
     * @return {boolean} True iff a reconnection was made, false otherwise.
     */
    function reconnect(connectionChild: Blockly.Connection, block: Blockly.Block, inputName: string): boolean;
}

declare module Blockly {

    class Names extends Names__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Names__Class  { 
    
            /**
             * Class for a database of entity names (variables, functions, etc).
             * @param {string} reservedWords A comma-separated string of words that are
             *     illegal for use as names in a language (e.g. 'new,if,this,...').
             * @param {string=} opt_variablePrefix Some languages need a '$' or a namespace
             *     before all variable names.
             * @constructor
             */
            constructor(reservedWords: string, opt_variablePrefix?: string);
    
            /**
             * Empty the database and start from scratch.  The reserved words are kept.
             */
            reset(): void;
    
            /**
             * Convert a Blockly entity name to a legal exportable entity name.
             * @param {string} name The Blockly entity name (no constraints).
             * @param {string} type The type of entity in Blockly
             *     ('VARIABLE', 'PROCEDURE', 'BUILTIN', etc...).
             * @return {string} An entity name legal for the exported language.
             */
            getName(name: string, type: string): string;
    
            /**
             * Convert a Blockly entity name to a legal exportable entity name.
             * Ensure that this is a new name not overlapping any previously defined name.
             * Also check against list of reserved words for the current language and
             * ensure name doesn't collide.
             * @param {string} name The Blockly entity name (no constraints).
             * @param {string} type The type of entity in Blockly
             *     ('VARIABLE', 'PROCEDURE', 'BUILTIN', etc...).
             * @return {string} An entity name legal for the exported language.
             */
            getDistinctName(name: string, type: string): string;
    
            /**
             * Given a proposed entity name, generate a name that conforms to the
             * [_A-Za-z][_A-Za-z0-9]* format that most languages consider legal for
             * variables.
             * @param {string} name Potentially illegal entity name.
             * @return {string} Safe entity name.
             * @private
             */
            safeName_(name: string): string;
    } 
    
}

declare module Blockly.Names {

    /**
     * Do the given two entity names refer to the same entity?
     * Blockly names are case-insensitive.
     * @param {string} name1 First name.
     * @param {string} name2 Second name.
     * @return {boolean} True if names are the same.
     */
    function equals(name1: string, name2: string): boolean;
}

declare module Blockly {

    class Options extends Options__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Options__Class  { 
    
            /**
             * Parse the user-specified options, using reasonable defaults where behaviour
             * is unspecified.
             * @param {!Object} options Dictionary of options.  Specification:
             *   https://developers.google.com/blockly/guides/get-started/web#configuration
             * @constructor
             */
            constructor(options: Object);
    
            /**
             * The parent of the current workspace, or null if there is no parent workspace.
             * @type {Blockly.Workspace}
             **/
            parentWorkspace: Blockly.Workspace;
    
            /**
             * If set, sets the translation of the workspace to match the scrollbars.
             */
            setMetrics: any /*missing*/;
    
            /**
             * Return an object with the metrics required to size the workspace.
             * @return {Object} Contains size and position metrics, or null.
             */
            getMetrics(): Object;
    } 
    
}

declare module Blockly.Options {

    /**
     * Parse the user-specified zoom options, using reasonable defaults where
     * behaviour is unspecified.  See zoom documentation:
     *   https://developers.google.com/blockly/guides/configure/web/zoom
     * @param {!Object} options Dictionary of options.
     * @return {!Object} A dictionary of normalized options.
     * @private
     */
    function parseZoomOptions_(options: Object): Object;

    /**
     * Parse the user-specified grid options, using reasonable defaults where
     * behaviour is unspecified. See grid documentation:
     *   https://developers.google.com/blockly/guides/configure/web/grid
     * @param {!Object} options Dictionary of options.
     * @return {!Object} A dictionary of normalized options.
     * @private
     */
    function parseGridOptions_(options: Object): Object;

    /**
     * Parse the provided toolbox tree into a consistent DOM format.
     * @param {Node|string} tree DOM tree of blocks, or text representation of same.
     * @return {Node} DOM tree of blocks, or null.
     */
    function parseToolboxTree(tree: Node|string): Node;
}

declare module Blockly.Procedures {

    /**
     * Constant to separate procedure names from variables and generated functions
     * when running generators.
     * @deprecated Use Blockly.PROCEDURE_CATEGORY_NAME
     */
    var NAME_TYPE: any /*missing*/;

    /**
     * Find all user-created procedure definitions in a workspace.
     * @param {!Blockly.Workspace} root Root workspace.
     * @return {!Array.<!Array.<!Array>>} Pair of arrays, the
     *     first contains procedures without return variables, the second with.
     *     Each procedure is defined by a three-element list of name, parameter
     *     list, and return value boolean.
     */
    function allProcedures(root: Blockly.Workspace): any[][][];

    /**
     * Comparison function for case-insensitive sorting of the first element of
     * a tuple.
     * @param {!Array} ta First tuple.
     * @param {!Array} tb Second tuple.
     * @return {number} -1, 0, or 1 to signify greater than, equality, or less than.
     * @private
     */
    function procTupleComparator_(ta: any[], tb: any[]): number;

    /**
     * Ensure two identically-named procedures don't exist.
     * @param {string} name Proposed procedure name.
     * @param {!Blockly.Block} block Block to disambiguate.
     * @return {string} Non-colliding name.
     */
    function findLegalName(name: string, block: Blockly.Block): string;

    /**
     * Does this procedure have a legal name?  Illegal names include names of
     * procedures already defined.
     * @param {string} name The questionable name.
     * @param {!Blockly.Workspace} workspace The workspace to scan for collisions.
     * @param {Blockly.Block=} opt_exclude Optional block to exclude from
     *     comparisons (one doesn't want to collide with oneself).
     * @return {boolean} True if the name is legal.
     * @private
     */
    function isLegalName_(name: string, workspace: Blockly.Workspace, opt_exclude?: Blockly.Block): boolean;

    /**
     * Return if the given name is already a procedure name.
     * @param {string} name The questionable name.
     * @param {!Blockly.Workspace} workspace The workspace to scan for collisions.
     * @param {Blockly.Block=} opt_exclude Optional block to exclude from
     *     comparisons (one doesn't want to collide with oneself).
     * @return {boolean} True if the name is used, otherwise return false.
     */
    function isNameUsed(name: string, workspace: Blockly.Workspace, opt_exclude?: Blockly.Block): boolean;

    /**
     * Rename a procedure.  Called by the editable field.
     * @param {string} name The proposed new name.
     * @return {string} The accepted name.
     * @this {Blockly.Field}
     */
    function rename(name: string): string;

    /**
     * Construct the blocks required by the flyout for the procedure category.
     * @param {!Blockly.Workspace} workspace The workspace contianing procedures.
     * @return {!Array.<!Element>} Array of XML block elements.
     */
    function flyoutCategory(workspace: Blockly.Workspace): Element[];

    /**
     * Find all the callers of a named procedure.
     * @param {string} name Name of procedure.
     * @param {!Blockly.Workspace} workspace The workspace to find callers in.
     * @return {!Array.<!Blockly.Block>} Array of caller blocks.
     */
    function getCallers(name: string, workspace: Blockly.Workspace): Blockly.Block[];

    /**
     * When a procedure definition changes its parameters, find and edit all its
     * callers.
     * @param {!Blockly.Block} defBlock Procedure definition block.
     */
    function mutateCallers(defBlock: Blockly.Block): void;

    /**
     * Find the definition block for the named procedure.
     * @param {string} name Name of procedure.
     * @param {!Blockly.Workspace} workspace The workspace to search.
     * @return {Blockly.Block} The procedure definition block, or null not found.
     */
    function getDefinition(name: string, workspace: Blockly.Workspace): Blockly.Block;
}

declare module Blockly {

    class RenderedConnection extends RenderedConnection__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class RenderedConnection__Class extends Blockly.Connection__Class  { 
    
            /**
             * Class for a connection between blocks that may be rendered on screen.
             * @param {!Blockly.Block} source The block establishing this connection.
             * @param {number} type The type of the connection.
             * @extends {Blockly.Connection}
             * @constructor
             */
            constructor(source: Blockly.Block, type: number);
    
            /**
             * Workspace units, (0, 0) is top left of block.
             * @type {!goog.math.Coordinate}
             * @private
             */
            offsetInBlock_: goog.math.Coordinate;
    
            /**
             * Returns the distance between this connection and another connection in
             * workspace units.
             * @param {!Blockly.Connection} otherConnection The other connection to measure
             *     the distance to.
             * @return {number} The distance between connections, in workspace units.
             */
            distanceFrom(otherConnection: Blockly.Connection): number;
    
            /**
             * Move the block(s) belonging to the connection to a point where they don't
             * visually interfere with the specified connection.
             * @param {!Blockly.Connection} staticConnection The connection to move away
             *     from.
             * @private
             */
            bumpAwayFrom_(staticConnection: Blockly.Connection): void;
    
            /**
             * Change the connection's coordinates.
             * @param {number} x New absolute x coordinate, in workspace coordinates.
             * @param {number} y New absolute y coordinate, in workspace coordinates.
             */
            moveTo(x: number, y: number): void;
    
            /**
             * Change the connection's coordinates.
             * @param {number} dx Change to x coordinate, in workspace units.
             * @param {number} dy Change to y coordinate, in workspace units.
             */
            moveBy(dx: number, dy: number): void;
    
            /**
             * Move this connection to the location given by its offset within the block and
             * the location of the block's top left corner.
             * @param {!goog.math.Coordinate} blockTL The location of the top left corner
             *     of the block, in workspace coordinates.
             */
            moveToOffset(blockTL: goog.math.Coordinate): void;
    
            /**
             * Set the offset of this connection relative to the top left of its block.
             * @param {number} x The new relative x, in workspace units.
             * @param {number} y The new relative y, in workspace units.
             */
            setOffsetInBlock(x: number, y: number): void;
    
            /**
             * Move the blocks on either side of this connection right next to each other.
             * @private
             */
            tighten_(): void;
    
            /**
             * Find the closest compatible connection to this connection.
             * All parameters are in workspace units.
             * @param {number} maxLimit The maximum radius to another connection.
             * @param {number} dx Horizontal offset between this connection's location
             *     in the database and the current location (as a result of dragging).
             * @param {number} dy Vertical offset between this connection's location
             *     in the database and the current location (as a result of dragging).
             * @return {!{connection: ?Blockly.Connection, radius: number}} Contains two
             *     properties: 'connection' which is either another connection or null,
             *     and 'radius' which is the distance.
             */
            closest(maxLimit: number, dx: number, dy: number): { connection: Blockly.Connection; radius: number };
    
            /**
             * Add highlighting around this connection.
             */
            highlight(): void;
    
            /**
             * Unhide this connection, as well as all down-stream connections on any block
             * attached to this connection.  This happens when a block is expanded.
             * Also unhides down-stream comments.
             * @return {!Array.<!Blockly.Block>} List of blocks to render.
             */
            unhideAll(): Blockly.Block[];
    
            /**
             * Remove the highlighting around this connection.
             */
            unhighlight(): void;
    
            /**
             * Set whether this connections is hidden (not tracked in a database) or not.
             * @param {boolean} hidden True if connection is hidden.
             */
            setHidden(hidden: boolean): void;
    
            /**
             * Hide this connection, as well as all down-stream connections on any block
             * attached to this connection.  This happens when a block is collapsed.
             * Also hides down-stream comments.
             */
            hideAll(): void;
    
            /**
             * Check if the two connections can be dragged to connect to each other.
             * @param {!Blockly.Connection} candidate A nearby connection to check.
             * @param {number} maxRadius The maximum radius allowed for connections, in
             *     workspace units.
             * @return {boolean} True if the connection is allowed, false otherwise.
             */
            isConnectionAllowed(candidate: Blockly.Connection, maxRadius: number): boolean;
    
            /**
             * Disconnect two blocks that are connected by this connection.
             * @param {!Blockly.Block} parentBlock The superior block.
             * @param {!Blockly.Block} childBlock The inferior block.
             * @private
             */
            disconnectInternal_(parentBlock: Blockly.Block, childBlock: Blockly.Block): void;
    
            /**
             * Respawn the shadow block if there was one connected to the this connection.
             * Render/rerender blocks as needed.
             * @private
             */
            respawnShadow_(): void;
    
            /**
             * Find all nearby compatible connections to this connection.
             * Type checking does not apply, since this function is used for bumping.
             * @param {number} maxLimit The maximum radius to another connection, in
             *     workspace units.
             * @return {!Array.<!Blockly.Connection>} List of connections.
             * @private
             */
            neighbours_(maxLimit: number): Blockly.Connection[];
    
            /**
             * Connect two connections together.  This is the connection on the superior
             * block.  Rerender blocks as needed.
             * @param {!Blockly.Connection} childConnection Connection on inferior block.
             * @private
             */
            connect_(childConnection: Blockly.Connection): void;
    
            /**
             * Function to be called when this connection's compatible types have changed.
             * @private
             */
            onCheckChanged_(): void;
    } 
    
}

declare module Blockly {

    class ScrollbarPair extends ScrollbarPair__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ScrollbarPair__Class  { 
    
            /**
             * Class for a pair of scrollbars.  Horizontal and vertical.
             * @param {!Blockly.Workspace} workspace Workspace to bind the scrollbars to.
             * @constructor
             */
            constructor(workspace: Blockly.Workspace);
    
            /**
             * Previously recorded metrics from the workspace.
             * @type {Object}
             * @private
             */
            oldHostMetrics_: Object;
    
            /**
             * Dispose of this pair of scrollbars.
             * Unlink from all DOM elements to prevent memory leaks.
             */
            dispose(): void;
    
            /**
             * Recalculate both of the scrollbars' locations and lengths.
             * Also reposition the corner rectangle.
             */
            resize(): void;
    
            /**
             * Set the handles of both scrollbars to be at a certain position in CSS pixels
             * relative to their parents.
             * @param {number} x Horizontal scroll value.
             * @param {number} y Vertical scroll value.
             */
            set(x: number, y: number): void;
    
            /**
             * Helper to calculate the ratio of handle position to scrollbar view size.
             * @param {number} handlePosition The value of the handle.
             * @param {number} viewSize The total size of the scrollbar's view.
             * @return {number} Ratio.
             * @private
             */
            getRatio_(handlePosition: number, viewSize: number): number;
    
            /**
             * Set whether this scrollbar's container is visible.
             * @param {boolean} visible Whether the container is visible.
             */
            setContainerVisible(visible: boolean): void;
    } 
    

    class Scrollbar extends Scrollbar__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Scrollbar__Class  { 
    
            /**
             * Class for a pure SVG scrollbar.
             * This technique offers a scrollbar that is guaranteed to work, but may not
             * look or behave like the system's scrollbars.
             * @param {!Blockly.Workspace} workspace Workspace to bind the scrollbar to.
             * @param {boolean} horizontal True if horizontal, false if vertical.
             * @param {boolean=} opt_pair True if scrollbar is part of a horiz/vert pair.
             * @param {string=} opt_class A class to be applied to this scrollbar.
             * @constructor
             */
            constructor(workspace: Blockly.Workspace, horizontal: boolean, opt_pair?: boolean, opt_class?: string);
    
            /**
             * The upper left corner of the scrollbar's SVG group in CSS pixels relative
             * to the scrollbar's origin.  This is usually relative to the injection div
             * origin.
             * @type {goog.math.Coordinate}
             * @private
             */
            position_: goog.math.Coordinate;
    
            /**
             * The location of the origin of the workspace that the scrollbar is in,
             * measured in CSS pixels relative to the injection div origin.  This is usually
             * (0, 0).  When the scrollbar is in a flyout it may have a different origin.
             * @type {goog.math.Coordinate}
             * @private
             */
            origin_: goog.math.Coordinate;
    
            /**
             * The position of the mouse along this scrollbar's major axis at the start of
             * the most recent drag.
             * Units are CSS pixels, with (0, 0) at the top left of the browser window.
             * For a horizontal scrollbar this is the x coordinate of the mouse down event;
             * for a vertical scrollbar it's the y coordinate of the mouse down event.
             * @type {goog.math.Coordinate}
             */
            startDragMouse_: goog.math.Coordinate;
    
            /**
             * The size of the area within which the scrollbar handle can move, in CSS
             * pixels.
             * @type {number}
             * @private
             */
            scrollViewSize_: number;
    
            /**
             * The length of the scrollbar handle in CSS pixels.
             * @type {number}
             * @private
             */
            handleLength_: number;
    
            /**
             * The offset of the start of the handle from the scrollbar position, in CSS
             * pixels.
             * @type {number}
             * @private
             */
            handlePosition_: number;
    
            /**
             * Whether the scrollbar handle is visible.
             * @type {boolean}
             * @private
             */
            isVisible_: boolean;
    
            /**
             * Whether the workspace containing this scrollbar is visible.
             * @type {boolean}
             * @private
             */
            containerVisible_: boolean;
    
            /**
             * Dispose of this scrollbar.
             * Unlink from all DOM elements to prevent memory leaks.
             */
            dispose(): void;
    
            /**
             * Set the length of the scrollbar's handle and change the SVG attribute
             * accordingly.
             * @param {number} newLength The new scrollbar handle length in CSS pixels.
             */
            setHandleLength_(newLength: number): void;
    
            /**
             * Set the offset of the scrollbar's handle from the scrollbar's position, and
             * change the SVG attribute accordingly.
             * @param {number} newPosition The new scrollbar handle offset in CSS pixels.
             */
            setHandlePosition(newPosition: number): void;
    
            /**
             * Set the size of the scrollbar's background and change the SVG attribute
             * accordingly.
             * @param {number} newSize The new scrollbar background length in CSS pixels.
             * @private
             */
            setScrollViewSize_(newSize: number): void;
    
            /**
             * Set the position of the scrollbar's SVG group in CSS pixels relative to the
             * scrollbar's origin.  This sets the scrollbar's location within the workspace.
             * @param {number} x The new x coordinate.
             * @param {number} y The new y coordinate.
             * @private
             */
            setPosition_(x: number, y: number): void;
    
            /**
             * Recalculate the scrollbar's location and its length.
             * @param {Object=} opt_metrics A data structure of from the describing all the
             * required dimensions.  If not provided, it will be fetched from the host
             * object.
             */
            resize(opt_metrics?: Object): void;
    
            /**
             * Recalculate a horizontal scrollbar's location and length.
             * @param {!Object} hostMetrics A data structure describing all the
             *     required dimensions, possibly fetched from the host object.
             * @private
             */
            resizeHorizontal_(hostMetrics: Object): void;
    
            /**
             * Recalculate a horizontal scrollbar's location on the screen and path length.
             * This should be called when the layout or size of the window has changed.
             * @param {!Object} hostMetrics A data structure describing all the
             *     required dimensions, possibly fetched from the host object.
             */
            resizeViewHorizontal(hostMetrics: Object): void;
    
            /**
             * Recalculate a horizontal scrollbar's location within its path and length.
             * This should be called when the contents of the workspace have changed.
             * @param {!Object} hostMetrics A data structure describing all the
             *     required dimensions, possibly fetched from the host object.
             */
            resizeContentHorizontal(hostMetrics: Object): void;
    
            /**
             * Recalculate a vertical scrollbar's location and length.
             * @param {!Object} hostMetrics A data structure describing all the
             *     required dimensions, possibly fetched from the host object.
             * @private
             */
            resizeVertical_(hostMetrics: Object): void;
    
            /**
             * Recalculate a vertical scrollbar's location on the screen and path length.
             * This should be called when the layout or size of the window has changed.
             * @param {!Object} hostMetrics A data structure describing all the
             *     required dimensions, possibly fetched from the host object.
             */
            resizeViewVertical(hostMetrics: Object): void;
    
            /**
             * Recalculate a vertical scrollbar's location within its path and length.
             * This should be called when the contents of the workspace have changed.
             * @param {!Object} hostMetrics A data structure describing all the
             *     required dimensions, possibly fetched from the host object.
             */
            resizeContentVertical(hostMetrics: Object): void;
    
            /**
             * Create all the DOM elements required for a scrollbar.
             * The resulting widget is not sized.
             * @param {string=} opt_class A class to be applied to this scrollbar.
             * @private
             */
            createDom_(opt_class?: string): void;
    
            /**
             * Is the scrollbar visible.  Non-paired scrollbars disappear when they aren't
             * needed.
             * @return {boolean} True if visible.
             */
            isVisible(): boolean;
    
            /**
             * Set whether the scrollbar's container is visible and update
             * display accordingly if visibility has changed.
             * @param {boolean} visible Whether the container is visible
             */
            setContainerVisible(visible: boolean): void;
    
            /**
             * Set whether the scrollbar is visible.
             * Only applies to non-paired scrollbars.
             * @param {boolean} visible True if visible.
             */
            setVisible(visible: boolean): void;
    
            /**
             * Update visibility of scrollbar based on whether it thinks it should
             * be visible and whether its containing workspace is visible.
             * We cannot rely on the containing workspace being hidden to hide us
             * because it is not necessarily our parent in the DOM.
             */
            updateDisplay_(): void;
    
            /**
             * Scroll by one pageful.
             * Called when scrollbar background is clicked.
             * @param {!Event} e Mouse down event.
             * @private
             */
            onMouseDownBar_(e: Event): void;
    
            /**
             * Start a dragging operation.
             * Called when scrollbar handle is clicked.
             * @param {!Event} e Mouse down event.
             * @private
             */
            onMouseDownHandle_(e: Event): void;
    
            /**
             * Drag the scrollbar's handle.
             * @param {!Event} e Mouse up event.
             * @private
             */
            onMouseMoveHandle_(e: Event): void;
    
            /**
             * Release the scrollbar handle and reset state accordingly.
             * @private
             */
            onMouseUpHandle_(): void;
    
            /**
             * Hide chaff and stop binding to mouseup and mousemove events.  Call this to
             * wrap up lose ends associated with the scrollbar.
             * @private
             */
            cleanUp_(): void;
    
            /**
             * Constrain the handle's position within the minimum (0) and maximum
             * (length of scrollbar) values allowed for the scrollbar.
             * @param {number} value Value that is potentially out of bounds, in CSS pixels.
             * @return {number} Constrained value, in CSS pixels.
             * @private
             */
            constrainHandle_(value: number): number;
    
            /**
             * Called when scrollbar is moved.
             * @private
             */
            onScroll_(): void;
    
            /**
             * Set the scrollbar handle's position.
             * @param {number} value The distance from the top/left end of the bar, in CSS
             *     pixels.  It may be larger than the maximum allowable position of the
             *     scrollbar handle.
             */
            set(value: number): void;
    
            /**
             * Record the origin of the workspace that the scrollbar is in, in pixels
             * relative to the injection div origin. This is for times when the scrollbar is
             * used in an object whose origin isn't the same as the main workspace
             * (e.g. in a flyout.)
             * @param {number} x The x coordinate of the scrollbar's origin, in CSS pixels.
             * @param {number} y The y coordinate of the scrollbar's origin, in CSS pixels.
             */
            setOrigin(x: number, y: number): void;
    } 
    
}

declare module Blockly.Scrollbar {

    /**
     * Width of vertical scrollbar or height of horizontal scrollbar in CSS pixels.
     * Scrollbars should be larger on touch devices.
     */
    var scrollbarThickness: any /*missing*/;

    /**
     * @param {!Object} first An object containing computed measurements of a
     *    workspace.
     * @param {!Object} second Another object containing computed measurements of a
     *    workspace.
     * @return {boolean} Whether the two sets of metrics are equivalent.
     * @private
     */
    function metricsAreEquivalent_(first: Object, second: Object): boolean;
}

declare module Blockly {

    class Toolbox extends Toolbox__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Toolbox__Class  { 
    
            /**
             * Class for a Toolbox.
             * Creates the toolbox's DOM.
             * @param {!Blockly.Workspace} workspace The workspace in which to create new
             *     blocks.
             * @constructor
             */
            constructor(workspace: Blockly.Workspace);
    
            /**
             * @type {!Blockly.Workspace}
             * @private
             */
            workspace_: Blockly.Workspace;
    
            /**
             * Is RTL vs LTR.
             * @type {boolean}
             */
            RTL: boolean;
    
            /**
             * Whether the toolbox should be laid out horizontally.
             * @type {boolean}
             * @private
             */
            horizontalLayout_: boolean;
    
            /**
             * Position of the toolbox and flyout relative to the workspace.
             * @type {number}
             */
            toolboxPosition: number;
    
            /**
             * Configuration constants for Closure's tree UI.
             * @type {Object.<string,*>}
             * @private
             */
            config_: { [key: string]: any };
    
            /**
             * Configuration constants for tree separator.
             * @type {Object.<string,*>}
             * @private
             */
            treeSeparatorConfig_: { [key: string]: any };
    
            /**
             * Width of the toolbox, which changes only in vertical layout.
             * @type {number}
             */
            width: number;
    
            /**
             * Height of the toolbox, which changes only in horizontal layout.
             * @type {number}
             */
            height: number;
    
            /**
             * The SVG group currently selected.
             * @type {SVGGElement}
             * @private
             */
            selectedOption_: SVGGElement;
    
            /**
             * The tree node most recently selected.
             * @type {goog.ui.tree.BaseNode}
             * @private
             */
            lastCategory_: goog.ui.tree.BaseNode;
    
            /**
             * Initializes the toolbox.
             */
            init(): void;
    
            /**
             * HTML container for the Toolbox menu.
             * @type {Element}
             */
            HtmlDiv: Element;
    
            /**
             * @type {!Blockly.Flyout}
             * @private
             */
            flyout_: Blockly.Flyout;
    
            /**
             * Dispose of this toolbox.
             */
            dispose(): void;
    
            /**
             * Get the width of the toolbox.
             * @return {number} The width of the toolbox.
             */
            getWidth(): number;
    
            /**
             * Get the height of the toolbox.
             * @return {number} The width of the toolbox.
             */
            getHeight(): number;
    
            /**
             * Move the toolbox to the edge.
             */
            position(): void;
    
            /**
             * Fill the toolbox with categories and blocks.
             * @param {!Node} newTree DOM tree of blocks.
             * @return {Node} Tree node to open at startup (or null).
             * @private
             */
            populate_(newTree: Node): Node;
    
            /**
             * Sync trees of the toolbox.
             * @param {!Node} treeIn DOM tree of blocks.
             * @param {!Blockly.Toolbox.TreeControl} treeOut The TreeContorol object built
             *     from treeIn.
             * @param {string} pathToMedia The path to the Blockly media directory.
             * @return {Node} Tree node to open at startup (or null).
             * @private
             */
            syncTrees_(treeIn: Node, treeOut: Blockly.Toolbox.TreeControl, pathToMedia: string): Node;
    
            /**
             * Recursively add colours to this toolbox.
             * @param {Blockly.Toolbox.TreeNode=} opt_tree Starting point of tree.
             *     Defaults to the root node.
             * @private
             */
            addColour_(opt_tree?: Blockly.Toolbox.TreeNode): void;
    
            /**
             * Unhighlight any previously specified option.
             */
            clearSelection(): void;
    
            /**
             * Adds styles on the toolbox indicating blocks will be deleted.
             * @package
             */
            addDeleteStyle(): void;
    
            /**
             * Remove styles from the toolbox that indicate blocks will be deleted.
             * @package
             */
            removeDeleteStyle(): void;
    
            /**
             * Return the deletion rectangle for this toolbox.
             * @return {goog.math.Rect} Rectangle in which to delete.
             */
            getClientRect(): goog.math.Rect;
    
            /**
             * Update the flyout's contents without closing it.  Should be used in response
             * to a change in one of the dynamic categories, such as variables or
             * procedures.
             */
            refreshSelection(): void;
    } 
    
}

declare module Blockly.Toolbox {

    class TreeControl extends TreeControl__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class TreeControl__Class extends goog.ui.tree.TreeControl__Class  { 
    
            /**
             * Extension of a TreeControl object that uses a custom tree node.
             * @param {Blockly.Toolbox} toolbox The parent toolbox for this tree.
             * @param {Object} config The configuration for the tree. See
             *    goog.ui.tree.TreeControl.DefaultConfig.
             * @constructor
             * @extends {goog.ui.tree.TreeControl}
             */
            constructor(toolbox: Blockly.Toolbox, config: Object);
    
            /**
             * Handles touch events.
             * @param {!goog.events.BrowserEvent} e The browser event.
             * @private
             */
            handleTouchEvent_(e: goog.events.BrowserEvent): void;
    } 
    

    class TreeNode extends TreeNode__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class TreeNode__Class extends goog.ui.tree.TreeNode__Class  { 
    
            /**
             * A single node in the tree, customized for Blockly's UI.
             * @param {Blockly.Toolbox} toolbox The parent toolbox for this tree.
             * @param {!goog.html.SafeHtml} html The HTML content of the node label.
             * @param {Object=} opt_config The configuration for the tree. See
             *    goog.ui.tree.TreeControl.DefaultConfig. If not specified, a default config
             *    will be used.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @constructor
             * @extends {goog.ui.tree.TreeNode}
             */
            constructor(toolbox: Blockly.Toolbox, html: goog.html.SafeHtml, opt_config?: Object, opt_domHelper?: goog.dom.DomHelper);
    } 
    

    class TreeSeparator extends TreeSeparator__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class TreeSeparator__Class extends Blockly.Toolbox.TreeNode__Class  { 
    
            /**
             * A blank separator node in the tree.
             * @param {Object=} config The configuration for the tree. See
             *    goog.ui.tree.TreeControl.DefaultConfig. If not specified, a default config
             *    will be used.
             * @constructor
             * @extends {Blockly.Toolbox.TreeNode}
             */
            constructor(config?: Object);
    } 
    
}

declare module Blockly.Tooltip {

    /**
     * Is a tooltip currently showing?
     */
    var visible: any /*missing*/;

    /**
     * Is someone else blocking the tooltip from being shown?
     * @type {boolean}
     * @private
     */
    var blocked_: boolean;

    /**
     * Maximum width (in characters) of a tooltip.
     */
    var LIMIT: any /*missing*/;

    /**
     * PID of suspended thread to clear tooltip on mouse out.
     * @private
     */
    var mouseOutPid_: any /*missing*/;

    /**
     * PID of suspended thread to show the tooltip.
     * @private
     */
    var showPid_: any /*missing*/;

    /**
     * Last observed X location of the mouse pointer (freezes when tooltip appears).
     * @private
     */
    var lastX_: any /*missing*/;

    /**
     * Last observed Y location of the mouse pointer (freezes when tooltip appears).
     * @private
     */
    var lastY_: any /*missing*/;

    /**
     * Current element being pointed at.
     * @private
     */
    var element_: any /*missing*/;

    /**
     * Once a tooltip has opened for an element, that element is 'poisoned' and
     * cannot respawn a tooltip until the pointer moves over a different element.
     * @private
     */
    var poisonedElement_: any /*missing*/;

    /**
     * Horizontal offset between mouse cursor and tooltip.
     */
    var OFFSET_X: any /*missing*/;

    /**
     * Vertical offset between mouse cursor and tooltip.
     */
    var OFFSET_Y: any /*missing*/;

    /**
     * Radius mouse can move before killing tooltip.
     */
    var RADIUS_OK: any /*missing*/;

    /**
     * Delay before tooltip appears.
     */
    var HOVER_MS: any /*missing*/;

    /**
     * Horizontal padding between tooltip and screen edge.
     */
    var MARGINS: any /*missing*/;

    /**
     * The HTML container.  Set once by Blockly.Tooltip.createDom.
     * @type {Element}
     */
    var DIV: Element;

    /**
     * Create the tooltip div and inject it onto the page.
     */
    function createDom(): void;

    /**
     * Binds the required mouse events onto an SVG element.
     * @param {!Element} element SVG element onto which tooltip is to be bound.
     */
    function bindMouseEvents(element: Element): void;

    /**
     * Hide the tooltip if the mouse is over a different object.
     * Initialize the tooltip to potentially appear for this object.
     * @param {!Event} e Mouse event.
     * @private
     */
    function onMouseOver_(e: Event): void;

    /**
     * Hide the tooltip if the mouse leaves the object and enters the workspace.
     * @param {!Event} e Mouse event.
     * @private
     */
    function onMouseOut_(e: Event): void;

    /**
     * When hovering over an element, schedule a tooltip to be shown.  If a tooltip
     * is already visible, hide it if the mouse strays out of a certain radius.
     * @param {!Event} e Mouse event.
     * @private
     */
    function onMouseMove_(e: Event): void;

    /**
     * Hide the tooltip.
     */
    function hide(): void;

    /**
     * Hide any in-progress tooltips and block showing new tooltips until the next
     * call to unblock().
     * @package
     */
    function block(): void;

    /**
     * Unblock tooltips: allow them to be scheduled and shown according to their own
     * logic.
     * @package
     */
    function unblock(): void;

    /**
     * Create the tooltip and show it.
     * @private
     */
    function show_(): void;
}

declare module Blockly.Touch {

    /**
     * Which touch events are we currently paying attention to?
     * @type {?string}
     * @private
     */
    var touchIdentifier_: string;

    /**
     * The TOUCH_MAP lookup dictionary specifies additional touch events to fire,
     * in conjunction with mouse events.
     * @type {Object}
     */
    var TOUCH_MAP: Object;

    /**
     * Clear the touch identifier that tracks which touch stream to pay attention
     * to.  This ends the current drag/gesture and allows other pointers to be
     * captured.
     */
    function clearTouchIdentifier(): void;

    /**
     * Decide whether Blockly should handle or ignore this event.
     * Mouse and touch events require special checks because we only want to deal
     * with one touch stream at a time.  All other events should always be handled.
     * @param {!Event} e The event to check.
     * @return {boolean} True if this event should be passed through to the
     *     registered handler; false if it should be blocked.
     */
    function shouldHandleEvent(e: Event): boolean;

    /**
     * Get the touch identifier from the given event.  If it was a mouse event, the
     * identifier is the string 'mouse'.
     * @param {!Event} e Mouse event or touch event.
     * @return {string} The touch identifier from the first changed touch, if
     *     defined.  Otherwise 'mouse'.
     */
    function getTouchIdentifierFromEvent(e: Event): string;

    /**
     * Check whether the touch identifier on the event matches the current saved
     * identifier.  If there is no identifier, that means it's a mouse event and
     * we'll use the identifier "mouse".  This means we won't deal well with
     * multiple mice being used at the same time.  That seems okay.
     * If the current identifier was unset, save the identifier from the
     * event.  This starts a drag/gesture, during which touch events with other
     * identifiers will be silently ignored.
     * @param {!Event} e Mouse event or touch event.
     * @return {boolean} Whether the identifier on the event matches the current
     *     saved identifier.
     */
    function checkTouchIdentifier(e: Event): boolean;

    /**
     * Set an event's clientX and clientY from its first changed touch.  Use this to
     * make a touch event work in a mouse event handler.
     * @param {!Event} e A touch event.
     */
    function setClientFromTouch(e: Event): void;

    /**
     * Check whether a given event is a mouse or touch event.
     * @param {!Event} e An event.
     * @return {boolean} true if it is a mouse or touch event; false otherwise.
     */
    function isMouseOrTouchEvent(e: Event): boolean;

    /**
     * Split an event into an array of events, one per changed touch or mouse
     * point.
     * @param {!Event} e A mouse event or a touch event with one or more changed
     * touches.
     * @return {!Array.<!Event>} An array of mouse or touch events.  Each touch
     *     event will have exactly one changed touch.
     */
    function splitEventByTouches(e: Event): Event[];
}

declare module Blockly {

    /**
     * PID of queued long-press task.
     * @private
     */
    var longPid_: any /*missing*/;

    /**
     * Context menus on touch devices are activated using a long-press.
     * Unfortunately the contextmenu touch event is currently (2015) only supported
     * by Chrome.  This function is fired on any touchstart event, queues a task,
     * which after about a second opens the context menu.  The tasks is killed
     * if the touch event terminates early.
     * @param {!Event} e Touch start event.
     * @param {Blockly.Gesture} gesture The gesture that triggered this longStart.
     * @private
     */
    function longStart_(e: Event, gesture: Blockly.Gesture): void;

    /**
     * Nope, that's not a long-press.  Either touchend or touchcancel was fired,
     * or a drag hath begun.  Kill the queued long-press task.
     * @private
     */
    function longStop_(): void;
}

declare module Blockly {

    class Trashcan extends Trashcan__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Trashcan__Class  { 
    
            /**
             * Class for a trash can.
             * @param {!Blockly.Workspace} workspace The workspace to sit in.
             * @constructor
             */
            constructor(workspace: Blockly.Workspace);
    
            /**
             * Width of both the trash can and lid images.
             * @type {number}
             * @private
             */
            WIDTH_: number;
    
            /**
             * Height of the trashcan image (minus lid).
             * @type {number}
             * @private
             */
            BODY_HEIGHT_: number;
    
            /**
             * Height of the lid image.
             * @type {number}
             * @private
             */
            LID_HEIGHT_: number;
    
            /**
             * Distance between trashcan and bottom edge of workspace.
             * @type {number}
             * @private
             */
            MARGIN_BOTTOM_: number;
    
            /**
             * Distance between trashcan and right edge of workspace.
             * @type {number}
             * @private
             */
            MARGIN_SIDE_: number;
    
            /**
             * Extent of hotspot on all sides beyond the size of the image.
             * @type {number}
             * @private
             */
            MARGIN_HOTSPOT_: number;
    
            /**
             * Location of trashcan in sprite image.
             * @type {number}
             * @private
             */
            SPRITE_LEFT_: number;
    
            /**
             * Location of trashcan in sprite image.
             * @type {number}
             * @private
             */
            SPRITE_TOP_: number;
    
            /**
             * Current open/close state of the lid.
             * @type {boolean}
             */
            isOpen: boolean;
    
            /**
             * The SVG group containing the trash can.
             * @type {Element}
             * @private
             */
            svgGroup_: Element;
    
            /**
             * The SVG image element of the trash can lid.
             * @type {Element}
             * @private
             */
            svgLid_: Element;
    
            /**
             * Task ID of opening/closing animation.
             * @type {number}
             * @private
             */
            lidTask_: number;
    
            /**
             * Current state of lid opening (0.0 = closed, 1.0 = open).
             * @type {number}
             * @private
             */
            lidOpen_: number;
    
            /**
             * Left coordinate of the trash can.
             * @type {number}
             * @private
             */
            left_: number;
    
            /**
             * Top coordinate of the trash can.
             * @type {number}
             * @private
             */
            top_: number;
    
            /**
             * Create the trash can elements.
             * @return {!Element} The trash can's SVG group.
             */
            createDom(): Element;
    
            /**
             * Initialize the trash can.
             * @param {number} bottom Distance from workspace bottom to bottom of trashcan.
             * @return {number} Distance from workspace bottom to the top of trashcan.
             */
            init(bottom: number): number;
    
            /**
             * Dispose of this trash can.
             * Unlink from all DOM elements to prevent memory leaks.
             */
            dispose(): void;
    
            /**
             * Move the trash can to the bottom-right corner.
             */
            position(): void;
    
            /**
             * Return the deletion rectangle for this trash can.
             * @return {goog.math.Rect} Rectangle in which to delete.
             */
            getClientRect(): goog.math.Rect;
    
            /**
             * Flip the lid open or shut.
             * @param {boolean} state True if open.
             * @private
             */
            setOpen_(state: boolean): void;
    
            /**
             * Rotate the lid open or closed by one step.  Then wait and recurse.
             * @private
             */
            animateLid_(): void;
    
            /**
             * Flip the lid shut.
             * Called externally after a drag.
             */
            close(): void;
    
            /**
             * Inspect the contents of the trash.
             */
            click(): void;
    } 
    
}

declare module Blockly.utils.uiMenu {

    /**
     * Get the size of a rendered goog.ui.Menu.
     * @param {!goog.ui.Menu} menu The menu to measure.
     * @return {!goog.math.Size} Object with width and height properties.
     * @package
     */
    function getSize(menu: goog.ui.Menu): goog.math.Size;

    /**
     * Adjust the bounding boxes used to position the widget div to deal with RTL
     * goog.ui.Menu positioning.  In RTL mode the menu renders down and to the left
     * of its start point, instead of down and to the right.  Adjusting all of the
     * bounding boxes accordingly allows us to use the same code for all widgets.
     * This function in-place modifies the provided bounding boxes.
     * @param {!Object} viewportBBox The bounding rectangle of the current viewport,
     *     in window coordinates.
     * @param {!Object} anchorBBox The bounding rectangle of the anchor, in window
     *     coordinates.
     * @param {!goog.math.Size} menuSize The size of the menu that is inside the
     *     widget div, in window coordinates.
     * @package
     */
    function adjustBBoxesForRTL(viewportBBox: Object, anchorBBox: Object, menuSize: goog.math.Size): void;
}

declare module Blockly.utils {

    /**
     * To allow ADVANCED_OPTIMIZATIONS, combining variable.name and variable['name']
     * is not possible. To access the exported Blockly.Msg.Something it needs to be
     * accessed through the exact name that was exported. Note, that all the exports
     * are happening as the last thing in the generated js files, so they won't be
     * accessible before JavaScript loads!
     * @return {!Object.<string, string>} The message array.
     * @private
     */
    function getMessageArray_(): { [key: string]: string };

    /**
     * Remove an attribute from a element even if it's in IE 10.
     * Similar to Element.removeAttribute() but it works on SVG elements in IE 10.
     * Sets the attribute to null in IE 10, which treats removeAttribute as a no-op
     * if it's called on an SVG element.
     * @param {!Element} element DOM element to remove attribute from.
     * @param {string} attributeName Name of attribute to remove.
     */
    function removeAttribute(element: Element, attributeName: string): void;

    /**
     * Add a CSS class to a element.
     * Similar to Closure's goog.dom.classes.add, except it handles SVG elements.
     * @param {!Element} element DOM element to add class to.
     * @param {string} className Name of class to add.
     * @return {boolean} True if class was added, false if already present.
     */
    function addClass(element: Element, className: string): boolean;

    /**
     * Remove a CSS class from a element.
     * Similar to Closure's goog.dom.classes.remove, except it handles SVG elements.
     * @param {!Element} element DOM element to remove class from.
     * @param {string} className Name of class to remove.
     * @return {boolean} True if class was removed, false if never present.
     */
    function removeClass(element: Element, className: string): boolean;

    /**
     * Checks if an element has the specified CSS class.
     * Similar to Closure's goog.dom.classes.has, except it handles SVG elements.
     * @param {!Element} element DOM element to check.
     * @param {string} className Name of class to check.
     * @return {boolean} True if class exists, false otherwise.
     * @private
     */
    function hasClass(element: Element, className: string): boolean;

    /**
     * Don't do anything for this event, just halt propagation.
     * @param {!Event} e An event.
     */
    function noEvent(e: Event): void;

    /**
     * Is this event targeting a text input widget?
     * @param {!Event} e An event.
     * @return {boolean} True if text input.
     */
    function isTargetInput(e: Event): boolean;

    /**
     * Return the coordinates of the top-left corner of this element relative to
     * its parent.  Only for SVG elements and children (e.g. rect, g, path).
     * @param {!Element} element SVG element to find the coordinates of.
     * @return {!goog.math.Coordinate} Object with .x and .y properties.
     */
    function getRelativeXY(element: Element): goog.math.Coordinate;

    /**
     * Return the coordinates of the top-left corner of this element relative to
     * the div blockly was injected into.
     * @param {!Element} element SVG element to find the coordinates of. If this is
     *     not a child of the div blockly was injected into, the behaviour is
     *     undefined.
     * @return {!goog.math.Coordinate} Object with .x and .y properties.
     */
    function getInjectionDivXY_(element: Element): goog.math.Coordinate;

    /**
     * Return the scale of this element.
     * @param {!Element} element  The element to find the coordinates of.
     * @return {!number} number represending the scale applied to the element.
     * @private
     */
    function getScale_(element: Element): number;

    /**
     * Static regex to pull the scale values out of a transform style property.
     * Accounts for same exceptions as XY_REGEXP_.
     * @type {!RegExp}
     * @private
     */
    var getScale_REGEXP_: RegExp;

    /**
     * Helper method for creating SVG elements.
     * @param {string} name Element's tag name.
     * @param {!Object} attrs Dictionary of attribute names and values.
     * @param {Element} parent Optional parent on which to append the element.
     * @return {!SVGElement} Newly created SVG element.
     */
    function createSvgElement(name: string, attrs: Object, parent: Element): SVGElement;

    /**
     * Is this event a right-click?
     * @param {!Event} e Mouse event.
     * @return {boolean} True if right-click.
     */
    function isRightButton(e: Event): boolean;

    /**
     * Return the converted coordinates of the given mouse event.
     * The origin (0,0) is the top-left corner of the Blockly SVG.
     * @param {!Event} e Mouse event.
     * @param {!Element} svg SVG element.
     * @param {SVGMatrix} matrix Inverted screen CTM to use.
     * @return {!SVGPoint} Object with .x and .y properties.
     */
    function mouseToSvg(e: Event, svg: Element, matrix: SVGMatrix): SVGPoint;

    /**
     * Given an array of strings, return the length of the shortest one.
     * @param {!Array.<string>} array Array of strings.
     * @return {number} Length of shortest string.
     */
    function shortestStringLength(array: string[]): number;

    /**
     * Given an array of strings, return the length of the common prefix.
     * Words may not be split.  Any space after a word is included in the length.
     * @param {!Array.<string>} array Array of strings.
     * @param {number=} opt_shortest Length of shortest string.
     * @return {number} Length of common prefix.
     */
    function commonWordPrefix(array: string[], opt_shortest?: number): number;

    /**
     * Given an array of strings, return the length of the common suffix.
     * Words may not be split.  Any space after a word is included in the length.
     * @param {!Array.<string>} array Array of strings.
     * @param {number=} opt_shortest Length of shortest string.
     * @return {number} Length of common suffix.
     */
    function commonWordSuffix(array: string[], opt_shortest?: number): number;

    /**
     * Parse a string with any number of interpolation tokens (%1, %2, ...).
     * It will also replace string table references (e.g., %{bky_my_msg} and
     * %{BKY_MY_MSG} will both be replaced with the value in
     * Blockly.Msg['MY_MSG']). Percentage sign characters '%' may be self-escaped
     * (e.g., '%%').
     * @param {string} message Text which might contain string table references and
     *     interpolation tokens.
     * @return {!Array.<string|number>} Array of strings and numbers.
     */
    function tokenizeInterpolation(message: string): string|number[];

    /**
     * Replaces string table references in a message, if the message is a string.
     * For example, "%{bky_my_msg}" and "%{BKY_MY_MSG}" will both be replaced with
     * the value in Blockly.Msg['MY_MSG'].
     * @param {string|?} message Message, which may be a string that contains
     *                           string table references.
     * @return {!string} String with message references replaced.
     */
    function replaceMessageReferences(message: string|any): string;

    /**
     * Validates that any %{MSG_KEY} references in the message refer to keys of
     * the Blockly.Msg string table.
     * @param {string} message Text which might contain string table references.
     * @return {boolean} True if all message references have matching values.
     *     Otherwise, false.
     */
    function checkMessageReferences(message: string): boolean;

    /**
     * Internal implementation of the message reference and interpolation token
     * parsing used by tokenizeInterpolation() and replaceMessageReferences().
     * @param {string} message Text which might contain string table references and
     *     interpolation tokens.
     * @param {boolean} parseInterpolationTokens Option to parse numeric
     *     interpolation tokens (%1, %2, ...) when true.
     * @return {!Array.<string|number>} Array of strings and numbers.
     * @private
     */
    function tokenizeInterpolation_(message: string, parseInterpolationTokens: boolean): string|number[];

    /**
     * Generate a unique ID.  This should be globally unique.
     * 87 characters ^ 20 length > 128 bits (better than a UUID).
     * @return {string} A globally unique ID string.
     */
    function genUid(): string;

    /**
     * Wrap text to the specified width.
     * @param {string} text Text to wrap.
     * @param {number} limit Width to wrap each line.
     * @return {string} Wrapped text.
     */
    function wrap(text: string, limit: number): string;

    /**
     * Wrap single line of text to the specified width.
     * @param {string} text Text to wrap.
     * @param {number} limit Width to wrap each line.
     * @return {string} Wrapped text.
     * @private
     */
    function wrapLine_(text: string, limit: number): string;

    /**
     * Compute a score for how good the wrapping is.
     * @param {!Array.<string>} words Array of each word.
     * @param {!Array.<boolean>} wordBreaks Array of line breaks.
     * @param {number} limit Width to wrap each line.
     * @return {number} Larger the better.
     * @private
     */
    function wrapScore_(words: string[], wordBreaks: boolean[], limit: number): number;

    /**
     * Mutate the array of line break locations until an optimal solution is found.
     * No line breaks are added or deleted, they are simply moved around.
     * @param {!Array.<string>} words Array of each word.
     * @param {!Array.<boolean>} wordBreaks Array of line breaks.
     * @param {number} limit Width to wrap each line.
     * @return {!Array.<boolean>} New array of optimal line breaks.
     * @private
     */
    function wrapMutate_(words: string[], wordBreaks: boolean[], limit: number): boolean[];

    /**
     * Reassemble the array of words into text, with the specified line breaks.
     * @param {!Array.<string>} words Array of each word.
     * @param {!Array.<boolean>} wordBreaks Array of line breaks.
     * @return {string} Plain text.
     * @private
     */
    function wrapToText_(words: string[], wordBreaks: boolean[]): string;

    /**
     * Check if 3D transforms are supported by adding an element
     * and attempting to set the property.
     * @return {boolean} true if 3D transforms are supported.
     */
    function is3dSupported(): boolean;

    /**
     * Insert a node after a reference node.
     * Contrast with node.insertBefore function.
     * @param {!Element} newNode New element to insert.
     * @param {!Element} refNode Existing element to precede new node.
     * @private
     */
    function insertAfter_(newNode: Element, refNode: Element): void;

    /**
     * Calls a function after the page has loaded, possibly immediately.
     * @param {function()} fn Function to run.
     * @throws Error Will throw if no global document can be found (e.g., Node.js).
     */
    function runAfterPageLoad(fn: { (): any /*missing*/ }): void;

    /**
     * Sets the CSS transform property on an element. This function sets the
     * non-vendor-prefixed and vendor-prefixed versions for backwards compatibility
     * with older browsers. See http://caniuse.com/#feat=transforms2d
     * @param {!Element} node The node which the CSS transform should be applied.
     * @param {string} transform The value of the CSS `transform` property.
     */
    function setCssTransform(node: Element, transform: string): void;

    /**
     * Get the position of the current viewport in window coordinates.  This takes
     * scroll into account.
     * @return {!Object} an object containing window width, height, and scroll
     *     position in window coordinates.
     * @package
     */
    function getViewportBBox(): Object;
}

declare module Blockly.utils.getRelativeXY {

    /**
     * Static regex to pull the x,y values out of an SVG translate() directive.
     * Note that Firefox and IE (9,10) return 'translate(12)' instead of
     * 'translate(12, 0)'.
     * Note that IE (9,10) returns 'translate(16 8)' instead of 'translate(16, 8)'.
     * Note that IE has been reported to return scientific notation (0.123456e-42).
     * @type {!RegExp}
     * @private
     */
    var XY_REGEX_: RegExp;

    /**
     * Static regex to pull the x,y,z values out of a translate3d() style property.
     * Accounts for same exceptions as XY_REGEXP_.
     * @type {!RegExp}
     * @private
     */
    var XY_3D_REGEX_: RegExp;

    /**
     * Static regex to pull the x,y,z values out of a translate3d() style property.
     * Accounts for same exceptions as XY_REGEXP_.
     * @type {!RegExp}
     * @private
     */
    var XY_2D_REGEX_: RegExp;
}

declare module Blockly.utils.genUid {

    /**
     * Legal characters for the unique ID.  Should be all on a US keyboard.
     * No characters that conflict with XML or JSON.  Requests to remove additional
     * 'problematic' characters from this soup will be denied.  That's your failure
     * to properly escape in your own environment.  Issues #251, #625, #682, #1304.
     * @private
     */
    var soup_: any /*missing*/;
}

declare module Blockly {

    class VariableMap extends VariableMap__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class VariableMap__Class  { 
    
            /**
             * Class for a variable map.  This contains a dictionary data structure with
             * variable types as keys and lists of variables as values.  The list of
             * variables are the type indicated by the key.
             * @param {!Blockly.Workspace} workspace The workspace this map belongs to.
             * @constructor
             */
            constructor(workspace: Blockly.Workspace);
    
            /**
             * A map from variable type to list of variable names.  The lists contain all
             * of the named variables in the workspace, including variables
             * that are not currently in use.
             * @type {!Object.<string, !Array.<Blockly.VariableModel>>}
             * @private
             */
            variableMap_: { [key: string]: Blockly.VariableModel[] };
    
            /**
             * The workspace this map belongs to.
             * @type {!Blockly.Workspace}
             */
            workspace: Blockly.Workspace;
    
            /**
             * Clear the variable map.
             */
            clear(): void;
    
            /**
             * Rename the given variable by updating its name in the variable map.
             * @param {Blockly.VariableModel} variable Variable to rename.
             * @param {string} newName New variable name.
             */
            renameVariable(variable: Blockly.VariableModel, newName: string): void;
    
            /**
             * Create a variable with a given name, optional type, and optional ID.
             * @param {string} name The name of the variable. This must be unique across
             *     variables and procedures.
             * @param {string=} opt_type The type of the variable like 'int' or 'string'.
             *     Does not need to be unique. Field_variable can filter variables based on
             *     their type. This will default to '' which is a specific type.
             * @param {string=} opt_id The unique ID of the variable. This will default to
             *     a UUID.
             * @return {Blockly.VariableModel} The newly created variable.
             */
            createVariable(name: string, opt_type?: string, opt_id?: string): Blockly.VariableModel;
    
            /**
             * Delete a variable.
             * @param {!Blockly.VariableModel} variable Variable to delete.
             */
            deleteVariable(variable: Blockly.VariableModel): void;
    
            /**
             * Find the variable by the given name and return it. Return null if it is not
             *     found.
             * @param {string} name The name to check for.
             * @return {Blockly.VariableModel} The variable with the given name, or null if
             *     it was not found.
             */
            getVariable(name: string): Blockly.VariableModel;
    
            /**
             * Find the variable by the given ID and return it. Return null if it is not
             *     found.
             * @param {string} id The ID to check for.
             * @return {Blockly.VariableModel} The variable with the given ID.
             */
            getVariableById(id: string): Blockly.VariableModel;
    
            /**
             * Get a list containing all of the variables of a specified type. If type is
             *     null, return list of variables with empty string type.
             * @param {?string} type Type of the variables to find.
             * @return {!Array.<!Blockly.VariableModel>} The sought after variables of the
             *     passed in type. An empty array if none are found.
             */
            getVariablesOfType(type: string): Blockly.VariableModel[];
    
            /**
             * Return all variable types.
             * @return {!Array.<string>} List of variable types.
             */
            getVariableTypes(): string[];
    
            /**
             * Return all variables of all types.
             * @return {!Array.<!Blockly.VariableModel>} List of variable models.
             */
            getAllVariables(): Blockly.VariableModel[];
    } 
    
}

declare module Blockly {

    class VariableModel extends VariableModel__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class VariableModel__Class  { 
    
            /**
             * Class for a variable model.
             * Holds information for the variable including name, ID, and type.
             * @param {!Blockly.Workspace} workspace The variable's workspace.
             * @param {!string} name The name of the variable. This must be unique across
             *     variables and procedures.
             * @param {string=} opt_type The type of the variable like 'int' or 'string'.
             *     Does not need to be unique. Field_variable can filter variables based on
             *     their type. This will default to '' which is a specific type.
             * @param {string=} opt_id The unique ID of the variable. This will default to
             *     a UUID.
             * @see {Blockly.FieldVariable}
             * @constructor
             */
            constructor(workspace: Blockly.Workspace, name: string, opt_type?: string, opt_id?: string);
    
            /**
             * The workspace the variable is in.
             * @type {!Blockly.Workspace}
             */
            workspace: Blockly.Workspace;
    
            /**
             * The name of the variable, typically defined by the user. It must be
             * unique across all names used for procedures and variables. It may be
             * changed by the user.
             * @type {string}
             */
            name: string;
    
            /**
             * The type of the variable, such as 'int' or 'sound_effect'. This may be
             * used to build a list of variables of a specific type. By default this is
             * the empty string '', which is a specific type.
             * @see {Blockly.FieldVariable}
             * @type {string}
             */
            type: string;
    
            /**
             * A unique id for the variable. This should be defined at creation and
             * not change, even if the name changes. In most cases this should be a
             * UUID.
             * @type {string}
             * @private
             */
            id_: string;
    
            /**
             * @return {!string} The ID for the variable.
             */
            getId(): string;
    } 
    
}

declare module Blockly.VariableModel {

    /**
     * A custom compare function for the VariableModel objects.
     * @param {Blockly.VariableModel} var1 First variable to compare.
     * @param {Blockly.VariableModel} var2 Second variable to compare.
     * @return {number} -1 if name of var1 is less than name of var2, 0 if equal,
     *     and 1 if greater.
     * @package
     */
    function compareByName(var1: Blockly.VariableModel, var2: Blockly.VariableModel): number;
}

declare module Blockly.Variables {

    /**
     * Constant to separate variable names from procedures and generated functions
     * when running generators.
     * @deprecated Use Blockly.VARIABLE_CATEGORY_NAME
     */
    var NAME_TYPE: any /*missing*/;

    /**
     * Find all user-created variables that are in use in the workspace.
     * For use by generators.
     * @param {!Blockly.Block|!Blockly.Workspace} root Root block or workspace.
     * @return {!Array.<string>} Array of variable names.
     */
    function allUsedVariables(root: Blockly.Block|Blockly.Workspace): string[];

    /**
     * Find all variables that the user has created through the workspace or
     * toolbox.  For use by generators.
     * @param {!Blockly.Workspace} root The workspace to inspect.
     * @return {!Array.<Blockly.VariableModel>} Array of variable models.
     */
    function allVariables(root: Blockly.Workspace): Blockly.VariableModel[];

    /**
     * Construct the elements (blocks and button) required by the flyout for the
     * variable category.
     * @param {!Blockly.Workspace} workspace The workspace contianing variables.
     * @return {!Array.<!Element>} Array of XML elements.
     */
    function flyoutCategory(workspace: Blockly.Workspace): Element[];

    /**
     * Construct the blocks required by the flyout for the variable category.
     * @param {!Blockly.Workspace} workspace The workspace contianing variables.
     * @return {!Array.<!Element>} Array of XML block elements.
     */
    function flyoutCategoryBlocks(workspace: Blockly.Workspace): Element[];

    /**
     * Return a new variable name that is not yet being used. This will try to
     * generate single letter variable names in the range 'i' to 'z' to start with.
     * If no unique name is located it will try 'i' to 'z', 'a' to 'h',
     * then 'i2' to 'z2' etc.  Skip 'l'.
     * @param {!Blockly.Workspace} workspace The workspace to be unique in.
     * @return {string} New variable name.
     */
    function generateUniqueName(workspace: Blockly.Workspace): string;

    /**
     * Create a new variable on the given workspace.
     * @param {!Blockly.Workspace} workspace The workspace on which to create the
     *     variable.
     * @param {function(?string=)=} opt_callback A callback. It will
     *     be passed an acceptable new variable name, or null if change is to be
     *     aborted (cancel button), or undefined if an existing variable was chosen.
     * @param {string=} opt_type The type of the variable like 'int', 'string', or
     *     ''. This will default to '', which is a specific type.
     */
    function createVariable(workspace: Blockly.Workspace, opt_callback?: { (_0: string): any /*missing*/ }, opt_type?: string): void;

    /**
     * Rename a variable with the given workspace, variableType, and oldName.
     * @param {!Blockly.Workspace} workspace The workspace on which to rename the
     *     variable.
     * @param {?Blockly.VariableModel} variable Variable to rename.
     * @param {function(?string=)=} opt_callback A callback. It will
     *     be passed an acceptable new variable name, or null if change is to be
     *     aborted (cancel button), or undefined if an existing variable was chosen.
     */
    function renameVariable(workspace: Blockly.Workspace, variable: Blockly.VariableModel, opt_callback?: { (_0: string): any /*missing*/ }): void;

    /**
     * Prompt the user for a new variable name.
     * @param {string} promptText The string of the prompt.
     * @param {string} defaultText The default value to show in the prompt's field.
     * @param {function(?string)} callback A callback. It will return the new
     *     variable name, or null if the user picked something illegal.
     */
    function promptName(promptText: string, defaultText: string, callback: { (_0: string): any /*missing*/ }): void;

    /**
     * Generate XML string for variable field.
     * @param {!Blockly.VariableModel} variableModel The variable model to generate
     *     an XML string from.
     * @return {string} The generated XML.
     * @private
     */
    function generateVariableFieldXml_(variableModel: Blockly.VariableModel): string;
}

declare module Blockly {

    class Warning extends Warning__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Warning__Class extends Blockly.Icon__Class  { 
    
            /**
             * Class for a warning.
             * @param {!Blockly.Block} block The block associated with this warning.
             * @extends {Blockly.Icon}
             * @constructor
             */
            constructor(block: Blockly.Block);
    
            /**
             * Does this icon get hidden when the block is collapsed.
             */
            collapseHidden: any /*missing*/;
    
            /**
             * Draw the warning icon.
             * @param {!Element} group The icon group.
             * @private
             */
            drawIcon_(group: Element): void;
    
            /**
             * Show or hide the warning bubble.
             * @param {boolean} visible True if the bubble should be visible.
             */
            setVisible(visible: boolean): void;
    
            /**
             * Bring the warning to the top of the stack when clicked on.
             * @param {!Event} e Mouse up event.
             * @private
             */
            bodyFocus_(e: Event): void;
    
            /**
             * Set this warning's text.
             * @param {string} text Warning text (or '' to delete).
             * @param {string} id An ID for this text entry to be able to maintain
             *     multiple warnings.
             */
            setText(text: string, id: string): void;
    
            /**
             * Get this warning's texts.
             * @return {string} All texts concatenated into one string.
             */
            getText(): string;
    
            /**
             * Dispose of this warning.
             */
            dispose(): void;
    } 
    
}

declare module Blockly.Warning {

    /**
     * Create the text for the warning's bubble.
     * @param {string} text The text to display.
     * @return {!SVGTextElement} The top-level node of the text.
     * @private
     */
    function textToDom_(text: string): SVGTextElement;
}

declare module Blockly.WidgetDiv {

    /**
     * The HTML container.  Set once by Blockly.WidgetDiv.createDom.
     * @type {Element}
     */
    var DIV: Element;

    /**
     * The object currently using this container.
     * @type {Object}
     * @private
     */
    var owner_: Object;

    /**
     * Optional cleanup function set by whichever object uses the widget.
     * @type {Function}
     * @private
     */
    var dispose_: Function;

    /**
     * Create the widget div and inject it onto the page.
     */
    function createDom(): void;

    /**
     * Initialize and display the widget div.  Close the old one if needed.
     * @param {!Object} newOwner The object that will be using this container.
     * @param {boolean} rtl Right-to-left (true) or left-to-right (false).
     * @param {Function} dispose Optional cleanup function to be run when the widget
     *   is closed.
     */
    function show(newOwner: Object, rtl: boolean, dispose: Function): void;

    /**
     * Destroy the widget and hide the div.
     */
    function hide(): void;

    /**
     * Is the container visible?
     * @return {boolean} True if visible.
     */
    function isVisible(): boolean;

    /**
     * Destroy the widget and hide the div if it is being used by the specified
     *   object.
     * @param {!Object} oldOwner The object that was using this container.
     */
    function hideIfOwner(oldOwner: Object): void;

    /**
     * Position the widget at a given location.  Prevent the widget from going
     * offscreen top or left (right in RTL).
     * @param {number} anchorX Horizontal location (window coordinates, not body).
     * @param {number} anchorY Vertical location (window coordinates, not body).
     * @param {!goog.math.Size} windowSize Height/width of window.
     * @param {!goog.math.Coordinate} scrollOffset X/y of window scrollbars.
     * @param {boolean} rtl True if RTL, false if LTR.
     */
    function position(anchorX: number, anchorY: number, windowSize: goog.math.Size, scrollOffset: goog.math.Coordinate, rtl: boolean): void;

    /**
     * Set the widget div's position and height.  This function does nothing clever:
     * it will not ensure that your widget div ends up in the visible window.
     * @param {number} x Horizontal location (window coordinates, not body).
     * @param {number} y Vertical location (window coordinates, not body).
     * @param {number} height The height of the widget div (pixels).
     * @private
     */
    function positionInternal_(x: number, y: number, height: number): void;

    /**
     * Position the widget div based on an anchor rectangle.
     * The widget should be placed adjacent to but not overlapping the anchor
     * rectangle.  The preferred position is directly below and aligned to the left
     * (ltr) or right (rtl) side of the anchor.
     * @param {!Object} viewportBBox The bounding rectangle of the current viewport,
     *     in window coordinates.
     * @param {!Object} anchorBBox The bounding rectangle of the anchor, in window
     *     coordinates.
     * @param {!goog.math.Size} widgetSize The size of the widget that is inside the
     *     widget div, in window coordinates.
     * @param {boolean} rtl Whether the workspace is in RTL mode.  This determines
     *     horizontal alignment.
     * @package
     */
    function positionWithAnchor(viewportBBox: Object, anchorBBox: Object, widgetSize: goog.math.Size, rtl: boolean): void;

    /**
     * Calculate an x position (in window coordinates) such that the widget will not
     * be offscreen on the right or left.
     * @param {!Object} viewportBBox The bounding rectangle of the current viewport,
     *     in window coordinates.
     * @param {!Object} anchorBBox The bounding rectangle of the anchor, in window
     *     coordinates.
     * @param {goog.math.Size} widgetSize The dimensions of the widget inside the
     *     widget div.
     * @param {boolean} rtl Whether the Blockly workspace is in RTL mode.
     * @return {number} A valid x-coordinate for the top left corner of the widget
     *     div, in window coordinates.
     * @private
     */
    function calculateX_(viewportBBox: Object, anchorBBox: Object, widgetSize: goog.math.Size, rtl: boolean): number;

    /**
     * Calculate a y position (in window coordinates) such that the widget will not
     * be offscreen on the top or bottom.
     * @param {!Object} viewportBBox The bounding rectangle of the current viewport,
     *     in window coordinates.
     * @param {!Object} anchorBBox The bounding rectangle of the anchor, in window
     *     coordinates.
     * @param {goog.math.Size} widgetSize The dimensions of the widget inside the
     *     widget div.
     * @return {number} A valid y-coordinate for the top left corner of the widget
     *     div, in window coordinates.
     * @private
     */
    function calculateY_(viewportBBox: Object, anchorBBox: Object, widgetSize: goog.math.Size): number;
}

declare module Blockly {

    class Workspace extends Workspace__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Workspace__Class  { 
    
            /**
             * Class for a workspace.  This is a data structure that contains blocks.
             * There is no UI, and can be created headlessly.
             * @param {!Blockly.Options=} opt_options Dictionary of options.
             * @constructor
             */
            constructor(opt_options?: Blockly.Options);
    
            /** @type {string} */
            id: string;
    
            /** @type {!Blockly.Options} */
            options: Blockly.Options;
    
            /** @type {boolean} */
            RTL: boolean;
    
            /** @type {boolean} */
            horizontalLayout: boolean;
    
            /** @type {number} */
            toolboxPosition: number;
    
            /**
             * @type {!Array.<!Blockly.Block>}
             * @private
             */
            topBlocks_: Blockly.Block[];
    
            /**
             * @type {!Array.<!Function>}
             * @private
             */
            listeners_: Function[];
    
            /**
             * @type {!Array.<!Blockly.Events.Abstract>}
             * @private
             */
            undoStack_: Blockly.Events.Abstract[];
    
            /**
             * @type {!Array.<!Blockly.Events.Abstract>}
             * @private
             */
            redoStack_: Blockly.Events.Abstract[];
    
            /**
             * @type {!Object}
             * @private
             */
            blockDB_: Object;
    
            /**
             * @type {!Blockly.VariableMap}
             * A map from variable type to list of variable names.  The lists contain all
             * of the named variables in the workspace, including variables
             * that are not currently in use.
             * @private
             */
            variableMap_: Blockly.VariableMap;
    
            /**
             * Returns `true` if the workspace is visible and `false` if it's headless.
             * @type {boolean}
             */
            rendered: boolean;
    
            /**
             * Maximum number of undo events in stack. `0` turns off undo, `Infinity` sets it to unlimited.
             * @type {number}
             */
            MAX_UNDO: number;
    
            /**
             * Dispose of this workspace.
             * Unlink from all DOM elements to prevent memory leaks.
             */
            dispose(): void;
    
            /**
             * Add a block to the list of top blocks.
             * @param {!Blockly.Block} block Block to add.
             */
            addTopBlock(block: Blockly.Block): void;
    
            /**
             * Remove a block from the list of top blocks.
             * @param {!Blockly.Block} block Block to remove.
             */
            removeTopBlock(block: Blockly.Block): void;
    
            /**
             * Finds the top-level blocks and returns them.  Blocks are optionally sorted
             * by position; top to bottom (with slight LTR or RTL bias).
             * @param {boolean} ordered Sort the list if true.
             * @return {!Array.<!Blockly.Block>} The top-level block objects.
             */
            getTopBlocks(ordered: boolean): Blockly.Block[];
    
            /**
             * Find all blocks in workspace.  No particular order.
             * @return {!Array.<!Blockly.Block>} Array of blocks.
             */
            getAllBlocks(): Blockly.Block[];
    
            /**
             * Dispose of all blocks in workspace.
             */
            clear(): void;
    
            /**
             * Walk the workspace and update the map of variables to only contain ones in
             * use on the workspace.  Use when loading new workspaces from disk.
             * @param {boolean} clear True if the old variable map should be cleared.
             */
            updateVariableStore(clear: boolean): void;
    
            /**
             * Rename a variable by updating its name in the variable map. Identify the
             * variable to rename with the given variable.
             * @param {?Blockly.VariableModel} variable Variable to rename.
             * @param {string} newName New variable name.
             */
            renameVariableInternal_(variable: Blockly.VariableModel, newName: string): void;
    
            /**
             * Rename a variable by updating its name in the variable map. Identify the
             * variable to rename with the given name.
             * @param {string} oldName Variable to rename.
             * @param {string} newName New variable name.
             */
            renameVariable(oldName: string, newName: string): void;
    
            /**
             * Rename a variable by updating its name in the variable map. Identify the
             * variable to rename with the given ID.
             * @param {string} id ID of the variable to rename.
             * @param {string} newName New variable name.
             */
            renameVariableById(id: string, newName: string): void;
    
            /**
             * Create a variable with a given name, optional type, and optional ID.
             * @param {!string} name The name of the variable. This must be unique across
             *     variables and procedures.
             * @param {string=} opt_type The type of the variable like 'int' or 'string'.
             *     Does not need to be unique. Field_variable can filter variables based on
             *     their type. This will default to '' which is a specific type.
             * @param {string=} opt_id The unique ID of the variable. This will default to
             *     a UUID.
             * @return {?Blockly.VariableModel} The newly created variable.
             */
            createVariable(name: string, opt_type?: string, opt_id?: string): Blockly.VariableModel;
    
            /**
             * Find all the uses of a named variable.
             * @param {string} name Name of variable.
             * @return {!Array.<!Blockly.Block>} Array of block usages.
             */
            getVariableUses(name: string): Blockly.Block[];
    
            /**
             * Delete a variable by the passed in name and all of its uses from this
             * workspace. May prompt the user for confirmation.
             * @param {string} name Name of variable to delete.
             */
            deleteVariable(name: string): void;
    
            /**
             * Delete a variables by the passed in ID and all of its uses from this
             * workspace. May prompt the user for confirmation.
             * @param {string} id ID of variable to delete.
             */
            deleteVariableById(id: string): void;
    
            /**
             * Deletes a variable and all of its uses from this workspace without asking the
             * user for confirmation.
             * @param {!Blockly.VariableModel} variable Variable to delete.
             * @private
             */
            deleteVariableInternal_(variable: Blockly.VariableModel): void;
    
            /**
             * Check whether a variable exists with the given name.  The check is
             * case-insensitive.
             * @param {string} name The name to check for.
             * @return {number} The index of the name in the variable list, or -1 if it is
             *     not present.
             * @deprecated April 2017
             */
            variableIndexOf(name: string): number;
    
            /**
             * Find the variable by the given name and return it. Return null if it is not
             *     found.
             * @param {!string} name The name to check for.
             * @return {?Blockly.VariableModel} the variable with the given name.
             */
            getVariable(name: string): Blockly.VariableModel;
    
            /**
             * Find the variable by the given ID and return it. Return null if it is not
             *     found.
             * @param {!string} id The ID to check for.
             * @return {?Blockly.VariableModel} The variable with the given ID.
             */
            getVariableById(id: string): Blockly.VariableModel;
    
            /**
             * Returns the horizontal offset of the workspace.
             * Intended for LTR/RTL compatibility in XML.
             * Not relevant for a headless workspace.
             * @return {number} Width.
             */
            getWidth(): number;
    
            /**
             * Obtain a newly created block.
             * @param {?string} prototypeName Name of the language object containing
             *     type-specific functions for this block.
             * @param {string=} opt_id Optional ID.  Use this ID if provided, otherwise
             *     create a new ID.
             * @return {!Blockly.Block} The created block.
             */
            newBlock(prototypeName: string, opt_id?: string): Blockly.Block;
    
            /**
             * The number of blocks that may be added to the workspace before reaching
             *     the maxBlocks.
             * @return {number} Number of blocks left.
             */
            remainingCapacity(): number;
    
            /**
             * Undo or redo the previous action.
             * @param {boolean} redo False if undo, true if redo.
             */
            undo(redo: boolean): void;
    
            /**
             * Clear the undo/redo stacks.
             */
            clearUndo(): void;
    
            /**
             * When something in this workspace changes, call a function.
             * @param {!Function} func Function to call.
             * @return {!Function} Function that can be passed to
             *     removeChangeListener.
             */
            addChangeListener(func: Function): Function;
    
            /**
             * Stop listening for this workspace's changes.
             * @param {Function} func Function to stop calling.
             */
            removeChangeListener(func: Function): void;
    
            /**
             * Fire a change event.
             * @param {!Blockly.Events.Abstract} event Event to fire.
             */
            fireChangeListener(event: Blockly.Events.Abstract): void;
    
            /**
             * Find the block on this workspace with the specified ID.
             * @param {string} id ID of block to find.
             * @return {Blockly.Block} The sought after block or null if not found.
             */
            getBlockById(id: string): Blockly.Block;
    
            /**
             * Checks whether all value and statement inputs in the workspace are filled
             * with blocks.
             * @param {boolean=} opt_shadowBlocksAreFilled An optional argument controlling
             *     whether shadow blocks are counted as filled. Defaults to true.
             * @return {boolean} True if all inputs are filled, false otherwise.
             */
            allInputsFilled(opt_shadowBlocksAreFilled?: boolean): boolean;
    
            /**
             * Find the variable with the specified type. If type is null, return list of
             *     variables with empty string type.
             * @param {?string} type Type of the variables to find.
             * @return {Array.<Blockly.VariableModel>} The sought after variables of the
             *     passed in type. An empty array if none are found.
             */
            getVariablesOfType(type: string): Blockly.VariableModel[];
    
            /**
             * Return all variable types.
             * @return {!Array.<string>} List of variable types.
             */
            getVariableTypes(): string[];
    
            /**
             * Return all variables of all types.
             * @return {!Array.<Blockly.VariableModel>} List of variable models.
             */
            getAllVariables(): Blockly.VariableModel[];
    } 
    
}

declare module Blockly.Workspace {

    /**
     * Angle away from the horizontal to sweep for blocks.  Order of execution is
     * generally top to bottom, but a small angle changes the scan to give a bit of
     * a left to right bias (reversed in RTL).  Units are in degrees.
     * See: http://tvtropes.org/pmwiki/pmwiki.php/Main/DiagonalBilling.
     */
    var SCAN_ANGLE: any /*missing*/;

    /**
     * Database of all workspaces.
     * @private
     */
    var WorkspaceDB_: any /*missing*/;

    /**
     * Find the workspace with the specified ID.
     * @param {string} id ID of workspace to find.
     * @return {Blockly.Workspace} The sought after workspace or null if not found.
     */
    function getById(id: string): Blockly.Workspace;
}

declare module Blockly {

    class WorkspaceAudio extends WorkspaceAudio__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class WorkspaceAudio__Class  { 
    
            /**
             * Class for loading, storing, and playing audio for a workspace.
             * @param {Blockly.WorkspaceSvg} parentWorkspace The parent of the workspace
             *     this audio object belongs to, or null.
             * @constructor
             */
            constructor(parentWorkspace: Blockly.WorkspaceSvg);
    
            /**
             * The parent of the workspace this object belongs to, or null.  May be
             * checked for sounds that this object can't find.
             * @type {Blockly.WorkspaceSvg}
             * @private
             */
            parentWorkspace_: Blockly.WorkspaceSvg;
    
            /**
             * Database of pre-loaded sounds.
             * @private
             * @const
             */
            SOUNDS_: any /*missing*/;
    
            /**
             * Time that the last sound was played.
             * @type {Date}
             * @private
             */
            lastSound_: Date;
    
            /**
             * Dispose of this audio manager.
             * @package
             */
            dispose(): void;
    
            /**
             * Load an audio file.  Cache it, ready for instantaneous playing.
             * @param {!Array.<string>} filenames List of file types in decreasing order of
             *   preference (i.e. increasing size).  E.g. ['media/go.mp3', 'media/go.wav']
             *   Filenames include path from Blockly's root.  File extensions matter.
             * @param {string} name Name of sound.
             */
            load(filenames: string[], name: string): void;
    
            /**
             * Preload all the audio files so that they play quickly when asked for.
             * @package
             */
            preload(): void;
    
            /**
             * Play a named sound at specified volume.  If volume is not specified,
             * use full volume (1).
             * @param {string} name Name of sound.
             * @param {number=} opt_volume Volume of sound (0-1).
             */
            play(name: string, opt_volume?: number): void;
    } 
    
}

declare module Blockly {

    class WorkspaceDragSurfaceSvg extends WorkspaceDragSurfaceSvg__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class WorkspaceDragSurfaceSvg__Class  { 
    
            /**
             * Blocks are moved into this SVG during a drag, improving performance.
             * The entire SVG is translated using css transforms instead of SVG so the
             * blocks are never repainted during drag improving performance.
             * @param {!Element} container Containing element.
             * @constructor
             */
            constructor(container: Element);
    
            /**
             * Dom structure when the workspace is being dragged. If there is no drag in
             * progress, the SVG is empty and display: none.
             * <svg class="blocklyWsDragSurface" style=transform:translate3d(...)>
             *   <g class="blocklyBlockCanvas"></g>
             *   <g class="blocklyBubbleCanvas">/g>
             * </svg>
             */
            SVG_: any /*missing*/;
    
            /**
             * SVG group inside the drag surface that holds blocks while a drag is in
             * progress. Blocks are moved here by the workspace at start of a drag and moved
             * back into the main SVG at the end of a drag.
             *
             * @type {Element}
             * @private
             */
            dragGroup_: Element;
    
            /**
             * Containing HTML element; parent of the workspace and the drag surface.
             * @type {Element}
             * @private
             */
            container_: Element;
    
            /**
             * Create the drag surface and inject it into the container.
             */
            createDom(): void;
    
            /**
             * Translate the entire drag surface during a drag.
             * We translate the drag surface instead of the blocks inside the surface
             * so that the browser avoids repainting the SVG.
             * Because of this, the drag coordinates must be adjusted by scale.
             * @param {number} x X translation for the entire surface
             * @param {number} y Y translation for the entire surface
             * @package
             */
            translateSurface(x: number, y: number): void;
    
            /**
             * Reports the surface translation in scaled workspace coordinates.
             * Use this when finishing a drag to return blocks to the correct position.
             * @return {!goog.math.Coordinate} Current translation of the surface
             * @package
             */
            getSurfaceTranslation(): goog.math.Coordinate;
    
            /**
             * Move the blockCanvas and bubbleCanvas out of the surface SVG and on to
             * newSurface.
             * @param {!SVGElement} newSurface The element to put the drag surface contents
             *     into.
             * @package
             */
            clearAndHide(newSurface: SVGElement): void;
    
            /**
             * Set the SVG to have the block canvas and bubble canvas in it and then
             * show the surface.
             * @param {!Element} blockCanvas The block canvas <g> element from the workspace.
             * @param {!Element} bubbleCanvas The <g> element that contains the bubbles.
             * @param {?Element} previousSibling The element to insert the block canvas &
                   bubble canvas after when it goes back in the DOM at the end of a drag.
             * @param {number} width The width of the workspace SVG element.
             * @param {number} height The height of the workspace SVG element.
             * @param {number} scale The scale of the workspace being dragged.
             * @package
             */
            setContentsAndShow(blockCanvas: Element, bubbleCanvas: Element, previousSibling: Element, width: number, height: number, scale: number): void;
    } 
    
}

declare module Blockly {

    class WorkspaceDragger extends WorkspaceDragger__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class WorkspaceDragger__Class  { 
    
            /**
             * Class for a workspace dragger.  It moves the workspace around when it is
             * being dragged by a mouse or touch.
             * Note that the workspace itself manages whether or not it has a drag surface
             * and how to do translations based on that.  This simply passes the right
             * commands based on events.
             * @param {!Blockly.WorkspaceSvg} workspace The workspace to drag.
             * @constructor
             */
            constructor(workspace: Blockly.WorkspaceSvg);
    
            /**
             * @type {!Blockly.WorkspaceSvg}
             * @private
             */
            workspace_: Blockly.WorkspaceSvg;
    
            /**
             * The workspace's metrics object at the beginning of the drag.  Contains size
             * and position metrics of a workspace.
             * Coordinate system: pixel coordinates.
             * @type {!Object}
             * @private
             */
            startDragMetrics_: Object;
    
            /**
             * The scroll position of the workspace at the beginning of the drag.
             * Coordinate system: pixel coordinates.
             * @type {!goog.math.Coordinate}
             * @private
             */
            startScrollXY_: goog.math.Coordinate;
    
            /**
             * Sever all links from this object.
             * @package
             */
            dispose(): void;
    
            /**
             * Start dragging the workspace.
             * @package
             */
            startDrag(): void;
    
            /**
             * Finish dragging the workspace and put everything back where it belongs.
             * @param {!goog.math.Coordinate} currentDragDeltaXY How far the pointer has
             *     moved from the position at the start of the drag, in pixel coordinates.
             * @package
             */
            endDrag(currentDragDeltaXY: goog.math.Coordinate): void;
    
            /**
             * Move the workspace based on the most recent mouse movements.
             * @param {!goog.math.Coordinate} currentDragDeltaXY How far the pointer has
             *     moved from the position at the start of the drag, in pixel coordinates.
             * @package
             */
            drag(currentDragDeltaXY: goog.math.Coordinate): void;
    
            /**
             * Move the scrollbars to drag the workspace.
             * x and y are in pixels.
             * @param {number} x The new x position to move the scrollbar to.
             * @param {number} y The new y position to move the scrollbar to.
             * @private
             */
            updateScroll_(x: number, y: number): void;
    } 
    
}

declare module Blockly {

    class WorkspaceSvg extends WorkspaceSvg__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class WorkspaceSvg__Class extends Blockly.Workspace__Class  { 
    
            /**
             * Class for a workspace.  This is an onscreen area with optional trashcan,
             * scrollbars, bubbles, and dragging.
             * @param {!Blockly.Options} options Dictionary of options.
             * @param {Blockly.BlockDragSurfaceSvg=} opt_blockDragSurface Drag surface for
             *     blocks.
             * @param {Blockly.WorkspaceDragSurfaceSvg=} opt_wsDragSurface Drag surface for
             *     the workspace.
             * @extends {Blockly.Workspace}
             * @constructor
             */
            constructor(options: Blockly.Options, opt_blockDragSurface?: Blockly.BlockDragSurfaceSvg, opt_wsDragSurface?: Blockly.WorkspaceDragSurfaceSvg);
    
            /**
             * List of currently highlighted blocks.  Block highlighting is often used to
             * visually mark blocks currently being executed.
             * @type !Array.<!Blockly.BlockSvg>
             * @private
             */
            highlightedBlocks_: any /*missing*/;
    
            /**
             * Object in charge of loading, storing, and playing audio for a workspace.
             * @type {Blockly.WorkspaceAudio}
             * @private
             */
            audioManager_: Blockly.WorkspaceAudio;
    
            /**
             * This workspace's grid object or null.
             * @type {Blockly.Grid}
             * @private
             */
            grid_: Blockly.Grid;
    
            /**
             * A wrapper function called when a resize event occurs.
             * You can pass the result to `unbindEvent_`.
             * @type {Array.<!Array>}
             */
            resizeHandlerWrapper_: any[][];
    
            /**
             * The render status of an SVG workspace.
             * Returns `true` for visible workspaces and `false` for non-visible,
             * or headless, workspaces.
             * @type {boolean}
             */
            rendered: boolean;
    
            /**
             * Is this workspace the surface for a flyout?
             * @type {boolean}
             */
            isFlyout: boolean;
    
            /**
             * Is this workspace the surface for a mutator?
             * @type {boolean}
             * @package
             */
            isMutator: boolean;
    
            /**
             * Whether this workspace has resizes enabled.
             * Disable during batch operations for a performance improvement.
             * @type {boolean}
             * @private
             */
            resizesEnabled_: boolean;
    
            /**
             * Current horizontal scrolling offset in pixel units.
             * @type {number}
             */
            scrollX: number;
    
            /**
             * Current vertical scrolling offset in pixel units.
             * @type {number}
             */
            scrollY: number;
    
            /**
             * Horizontal scroll value when scrolling started in pixel units.
             * @type {number}
             */
            startScrollX: number;
    
            /**
             * Vertical scroll value when scrolling started in pixel units.
             * @type {number}
             */
            startScrollY: number;
    
            /**
             * Distance from mouse to object being dragged.
             * @type {goog.math.Coordinate}
             * @private
             */
            dragDeltaXY_: goog.math.Coordinate;
    
            /**
             * Current scale.
             * @type {number}
             */
            scale: number;
    
            /** @type {Blockly.Trashcan} */
            trashcan: Blockly.Trashcan;
    
            /**
             * This workspace's scrollbars, if they exist.
             * @type {Blockly.ScrollbarPair}
             */
            scrollbar: Blockly.ScrollbarPair;
    
            /**
             * The current gesture in progress on this workspace, if any.
             * @type {Blockly.Gesture}
             * @private
             */
            currentGesture_: Blockly.Gesture;
    
            /**
             * This workspace's surface for dragging blocks, if it exists.
             * @type {Blockly.BlockDragSurfaceSvg}
             * @private
             */
            blockDragSurface_: Blockly.BlockDragSurfaceSvg;
    
            /**
             * This workspace's drag surface, if it exists.
             * @type {Blockly.WorkspaceDragSurfaceSvg}
             * @private
             */
            workspaceDragSurface_: Blockly.WorkspaceDragSurfaceSvg;
    
            /**
              * Whether to move workspace to the drag surface when it is dragged.
              * True if it should move, false if it should be translated directly.
              * @type {boolean}
              * @private
              */
            useWorkspaceDragSurface_: boolean;
    
            /**
             * Whether the drag surface is actively in use. When true, calls to
             * translate will translate the drag surface instead of the translating the
             * workspace directly.
             * This is set to true in setupDragSurface and to false in resetDragSurface.
             * @type {boolean}
             * @private
             */
            isDragSurfaceActive_: boolean;
    
            /**
             * Last known position of the page scroll.
             * This is used to determine whether we have recalculated screen coordinate
             * stuff since the page scrolled.
             * @type {!goog.math.Coordinate}
             * @private
             */
            lastRecordedPageScroll_: goog.math.Coordinate;
    
            /**
             * Map from function names to callbacks, for deciding what to do when a button
             * is clicked.
             * @type {!Object.<string, function(!Blockly.FlyoutButton)>}
             * @private
             */
            flyoutButtonCallbacks_: { [key: string]: { (_0: Blockly.FlyoutButton): any /*missing*/ } };
    
            /**
             * Map from function names to callbacks, for deciding what to do when a custom
             * toolbox category is opened.
             * @type {!Object.<string, function(!Blockly.Workspace):!Array.<!Element>>}
             * @private
             */
            toolboxCategoryCallbacks_: { [key: string]: { (_0: Blockly.Workspace): Element[] } };
    
            /**
             * Inverted screen CTM, for use in mouseToSvg.
             * @type {SVGMatrix}
             * @private
             */
            inverseScreenCTM_: SVGMatrix;
    
            /**
             * Getter for the inverted screen CTM.
             * @return {SVGMatrix} The matrix to use in mouseToSvg
             */
            getInverseScreenCTM(): SVGMatrix;
    
            /**
             * Update the inverted screen CTM.
             */
            updateInverseScreenCTM(): void;
    
            /**
             * Return the absolute coordinates of the top-left corner of this element,
             * scales that after canvas SVG element, if it's a descendant.
             * The origin (0,0) is the top-left corner of the Blockly SVG.
             * @param {!Element} element Element to find the coordinates of.
             * @return {!goog.math.Coordinate} Object with .x and .y properties.
             * @private
             */
            getSvgXY(element: Element): goog.math.Coordinate;
    
            /**
             * Return the position of the workspace origin relative to the injection div
             * origin in pixels.
             * The workspace origin is where a block would render at position (0, 0).
             * It is not the upper left corner of the workspace SVG.
             * @return {!goog.math.Coordinate} Offset in pixels.
             * @package
             */
            getOriginOffsetInPixels(): goog.math.Coordinate;
    
            /**
             * Save resize handler data so we can delete it later in dispose.
             * @param {!Array.<!Array>} handler Data that can be passed to unbindEvent_.
             */
            setResizeHandlerWrapper(handler: any[][]): void;
    
            /**
             * Create the workspace DOM elements.
             * @param {string=} opt_backgroundClass Either 'blocklyMainBackground' or
             *     'blocklyMutatorBackground'.
             * @return {!Element} The workspace's SVG group.
             */
            createDom(opt_backgroundClass?: string): Element;
    
            /**
             * <g class="blocklyWorkspace">
             *   <rect class="blocklyMainBackground" height="100%" width="100%"></rect>
             *   [Trashcan and/or flyout may go here]
             *   <g class="blocklyBlockCanvas"></g>
             *   <g class="blocklyBubbleCanvas"></g>
             * </g>
             * @type {SVGElement}
             */
            svgGroup_: SVGElement;
    
            /** @type {SVGElement} */
            svgBackground_: SVGElement;
    
            /** @type {SVGElement} */
            svgBlockCanvas_: SVGElement;
    
            /** @type {SVGElement} */
            svgBubbleCanvas_: SVGElement;
    
            /**
             * @type {Blockly.Toolbox}
             * @private
             */
            toolbox_: Blockly.Toolbox;
    
            /**
             * Dispose of this workspace.
             * Unlink from all DOM elements to prevent memory leaks.
             */
            dispose(): void;
    
            /**
             * Obtain a newly created block.
             * @param {?string} prototypeName Name of the language object containing
             *     type-specific functions for this block.
             * @param {string=} opt_id Optional ID.  Use this ID if provided, otherwise
             *     create a new ID.
             * @return {!Blockly.BlockSvg} The created block.
             */
            newBlock(prototypeName: string, opt_id?: string): Blockly.BlockSvg;
    
            /**
             * Add a trashcan.
             * @param {number} bottom Distance from workspace bottom to bottom of trashcan.
             * @return {number} Distance from workspace bottom to the top of trashcan.
             * @private
             */
            addTrashcan_(bottom: number): number;
    
            /**
             * Add zoom controls.
             * @param {number} bottom Distance from workspace bottom to bottom of controls.
             * @return {number} Distance from workspace bottom to the top of controls.
             * @private
             */
            addZoomControls_(bottom: number): number;
    
            /** @type {Blockly.ZoomControls} */
            zoomControls_: Blockly.ZoomControls;
    
            /**
             * Add a flyout element in an element with the given tag name.
             * @param {string} tagName What type of tag the flyout belongs in.
             * @return {!Element} The element containing the flyout DOM.
             * @private
             */
            addFlyout_(tagName: string): Element;
    
            /**
             * @type {!Blockly.Flyout}
             * @private
             */
            flyout_: Blockly.Flyout;
    
            /**
             * Getter for the flyout associated with this workspace.  This flyout may be
             * owned by either the toolbox or the workspace, depending on toolbox
             * configuration.  It will be null if there is no flyout.
             * @return {Blockly.Flyout} The flyout on this workspace.
             * @package
             */
            getFlyout_(): Blockly.Flyout;
    
            /**
             * Update items that use screen coordinate calculations
             * because something has changed (e.g. scroll position, window size).
             * @private
             */
            updateScreenCalculations_(): void;
    
            /**
             * If enabled, resize the parts of the workspace that change when the workspace
             * contents (e.g. block positions) change.  This will also scroll the
             * workspace contents if needed.
             * @package
             */
            resizeContents(): void;
    
            /**
             * Resize and reposition all of the workspace chrome (toolbox,
             * trash, scrollbars etc.)
             * This should be called when something changes that
             * requires recalculating dimensions and positions of the
             * trash, zoom, toolbox, etc. (e.g. window resize).
             */
            resize(): void;
    
            /**
             * Resizes and repositions workspace chrome if the page has a new
             * scroll position.
             * @package
             */
            updateScreenCalculationsIfScrolled(): void;
    
            /**
             * Get the SVG element that forms the drawing surface.
             * @return {!Element} SVG element.
             */
            getCanvas(): Element;
    
            /**
             * Get the SVG element that forms the bubble surface.
             * @return {!SVGGElement} SVG element.
             */
            getBubbleCanvas(): SVGGElement;
    
            /**
             * Get the SVG element that contains this workspace.
             * @return {Element} SVG element.
             */
            getParentSvg(): Element;
    
            /**
             * Translate this workspace to new coordinates.
             * @param {number} x Horizontal translation.
             * @param {number} y Vertical translation.
             */
            translate(x: number, y: number): void;
    
            /**
             * Called at the end of a workspace drag to take the contents
             * out of the drag surface and put them back into the workspace SVG.
             * Does nothing if the workspace drag surface is not enabled.
             * @package
             */
            resetDragSurface(): void;
    
            /**
             * Called at the beginning of a workspace drag to move contents of
             * the workspace to the drag surface.
             * Does nothing if the drag surface is not enabled.
             * @package
             */
            setupDragSurface(): void;
    
            /**
             * Returns the horizontal offset of the workspace.
             * Intended for LTR/RTL compatibility in XML.
             * @return {number} Width.
             */
            getWidth(): number;
    
            /**
             * Toggles the visibility of the workspace.
             * Currently only intended for main workspace.
             * @param {boolean} isVisible True if workspace should be visible.
             */
            setVisible(isVisible: boolean): void;
    
            /**
             * Render all blocks in workspace.
             */
            render(): void;
    
            /**
             * Was used back when block highlighting (for execution) and block selection
             * (for editing) were the same thing.
             * Any calls of this function can be deleted.
             * @deprecated October 2016
             */
            traceOn(): void;
    
            /**
             * Highlight or unhighlight a block in the workspace.  Block highlighting is
             * often used to visually mark blocks currently being executed.
             * @param {?string} id ID of block to highlight/unhighlight,
             *   or null for no block (used to unhighlight all blocks).
             * @param {boolean=} opt_state If undefined, highlight specified block and
             * automatically unhighlight all others.  If true or false, manually
             * highlight/unhighlight the specified block.
             */
            highlightBlock(id: string, opt_state?: boolean): void;
    
            /**
             * Paste the provided block onto the workspace.
             * @param {!Element} xmlBlock XML block element.
             */
            paste(xmlBlock: Element): void;
    
            /**
             * Refresh the toolbox unless there's a drag in progress.
             * @private
             */
            refreshToolboxSelection_(): void;
    
            /**
             * Rename a variable by updating its name in the variable list.
             * @param {string} oldName Variable to rename.
             * @param {string} newName New variable name.
             * @package
             */
            renameVariable(oldName: string, newName: string): void;
    
            /**
             * Rename a variable by updating its name in the variable map.  Update the
             *     flyout to show the renamed variable immediately.
             * @param {string} id ID of the variable to rename.
             * @param {string} newName New variable name.
             * @package
             */
            renameVariableById(id: string, newName: string): void;
    
            /**
             * Delete a variable by the passed in name.   Update the flyout to show
             *     immediately that the variable is deleted.
             * @param {string} name Name of variable to delete.
             * @package
             */
            deleteVariable(name: string): void;
    
            /**
             * Delete a variable by the passed in ID.   Update the flyout to show
             *     immediately that the variable is deleted.
             * @param {string} id ID of variable to delete.
             * @package
             */
            deleteVariableById(id: string): void;
    
            /**
             * Create a new variable with the given name.  Update the flyout to show the new
             *     variable immediately.
             * @param {string} name The new variable's name.
             * @param {string=} opt_type The type of the variable like 'int' or 'string'.
             *     Does not need to be unique. Field_variable can filter variables based on
             *     their type. This will default to '' which is a specific type.
             * @param {string=} opt_id The unique ID of the variable. This will default to
             *     a UUID.
             * @return {?Blockly.VariableModel} The newly created variable.
             * @package
             */
            createVariable(name: string, opt_type?: string, opt_id?: string): Blockly.VariableModel;
    
            /**
             * Make a list of all the delete areas for this workspace.
             */
            recordDeleteAreas(): void;
    
            /**
             * Is the mouse event over a delete area (toolbox or non-closing flyout)?
             * @param {!Event} e Mouse move event.
             * @return {?number} Null if not over a delete area, or an enum representing
             *     which delete area the event is over.
             */
            isDeleteArea(e: Event): number;
    
            /**
             * Handle a mouse-down on SVG drawing surface.
             * @param {!Event} e Mouse down event.
             * @private
             */
            onMouseDown_(e: Event): void;
    
            /**
             * Start tracking a drag of an object on this workspace.
             * @param {!Event} e Mouse down event.
             * @param {!goog.math.Coordinate} xy Starting location of object.
             */
            startDrag(e: Event, xy: goog.math.Coordinate): void;
    
            /**
             * Track a drag of an object on this workspace.
             * @param {!Event} e Mouse move event.
             * @return {!goog.math.Coordinate} New location of object.
             */
            moveDrag(e: Event): goog.math.Coordinate;
    
            /**
             * Is the user currently dragging a block or scrolling the flyout/workspace?
             * @return {boolean} True if currently dragging or scrolling.
             */
            isDragging(): boolean;
    
            /**
             * Is this workspace draggable and scrollable?
             * @return {boolean} True if this workspace may be dragged.
             */
            isDraggable(): boolean;
    
            /**
             * Handle a mouse-wheel on SVG drawing surface.
             * @param {!Event} e Mouse wheel event.
             * @private
             */
            onMouseWheel_(e: Event): void;
    
            /**
             * Calculate the bounding box for the blocks on the workspace.
             * Coordinate system: workspace coordinates.
             *
             * @return {Object} Contains the position and size of the bounding box
             *   containing the blocks on the workspace.
             */
            getBlocksBoundingBox(): Object;
    
            /**
             * Clean up the workspace by ordering all the blocks in a column.
             */
            cleanUp(): void;
    
            /**
             * Show the context menu for the workspace.
             * @param {!Event} e Mouse event.
             * @private
             */
            showContextMenu_(e: Event): void;
    
            /**
             * Modify the block tree on the existing toolbox.
             * @param {Node|string} tree DOM tree of blocks, or text representation of same.
             */
            updateToolbox(tree: Node|string): void;
    
            /**
             * Mark this workspace as the currently focused main workspace.
             */
            markFocused(): void;
    
            /**
             * Set the workspace to have focus in the browser.
             * @private
             */
            setBrowserFocus(): void;
    
            /**
             * Zooming the blocks centered in (x, y) coordinate with zooming in or out.
             * @param {number} x X coordinate of center.
             * @param {number} y Y coordinate of center.
             * @param {number} amount Amount of zooming
             *                        (negative zooms out and positive zooms in).
             */
            zoom(x: number, y: number, amount: number): void;
    
            /**
             * Zooming the blocks centered in the center of view with zooming in or out.
             * @param {number} type Type of zooming (-1 zooming out and 1 zooming in).
             */
            zoomCenter(type: number): void;
    
            /**
             * Zoom the blocks to fit in the workspace if possible.
             */
            zoomToFit(): void;
    
            /**
             * Center the workspace.
             */
            scrollCenter(): void;
    
            /**
             * Set the workspace's zoom factor.
             * @param {number} newScale Zoom factor.
             */
            setScale(newScale: number): void;
    
            /**
             * Update whether this workspace has resizes enabled.
             * If enabled, workspace will resize when appropriate.
             * If disabled, workspace will not resize until re-enabled.
             * Use to avoid resizing during a batch operation, for performance.
             * @param {boolean} enabled Whether resizes should be enabled.
             */
            setResizesEnabled(enabled: boolean): void;
    
            /**
             * Dispose of all blocks in workspace, with an optimization to prevent resizes.
             */
            clear(): void;
    
            /**
             * Register a callback function associated with a given key, for clicks on
             * buttons and labels in the flyout.
             * For instance, a button specified by the XML
             * <button text="create variable" callbackKey="CREATE_VARIABLE"></button>
             * should be matched by a call to
             * registerButtonCallback("CREATE_VARIABLE", yourCallbackFunction).
             * @param {string} key The name to use to look up this function.
             * @param {function(!Blockly.FlyoutButton)} func The function to call when the
             *     given button is clicked.
             */
            registerButtonCallback(key: string, func: { (_0: Blockly.FlyoutButton): any /*missing*/ }): void;
    
            /**
             * Get the callback function associated with a given key, for clicks on buttons
             * and labels in the flyout.
             * @param {string} key The name to use to look up the function.
             * @return {?function(!Blockly.FlyoutButton)} The function corresponding to the
             *     given key for this workspace; null if no callback is registered.
             */
            getButtonCallback(key: string): { (_0: Blockly.FlyoutButton): any /*missing*/ };
    
            /**
             * Remove a callback for a click on a button in the flyout.
             * @param {string} key The name associated with the callback function.
             */
            removeButtonCallback(key: string): void;
    
            /**
             * Register a callback function associated with a given key, for populating
             * custom toolbox categories in this workspace.  See the variable and procedure
             * categories as an example.
             * @param {string} key The name to use to look up this function.
             * @param {function(!Blockly.Workspace):!Array.<!Element>} func The function to
             *     call when the given toolbox category is opened.
             */
            registerToolboxCategoryCallback(key: string, func: { (_0: Blockly.Workspace): Element[] }): void;
    
            /**
             * Get the callback function associated with a given key, for populating
             * custom toolbox categories in this workspace.
             * @param {string} key The name to use to look up the function.
             * @return {?function(!Blockly.Workspace):!Array.<!Element>} The function
             *     corresponding to the given key for this workspace, or null if no function
             *     is registered.
             */
            getToolboxCategoryCallback(key: string): { (_0: Blockly.Workspace): Element[] };
    
            /**
             * Remove a callback for a click on a custom category's name in the toolbox.
             * @param {string} key The name associated with the callback function.
             */
            removeToolboxCategoryCallback(key: string): void;
    
            /**
             * Look up the gesture that is tracking this touch stream on this workspace.
             * May create a new gesture.
             * @param {!Event} e Mouse event or touch event
             * @return {Blockly.Gesture} The gesture that is tracking this touch stream,
             *     or null if no valid gesture exists.
             * @package
             */
            getGesture(e: Event): Blockly.Gesture;
    
            /**
             * Clear the reference to the current gesture.
             * @package
             */
            clearGesture(): void;
    
            /**
             * Cancel the current gesture, if one exists.
             * @package
             */
            cancelCurrentGesture(): void;
    
            /**
             * Get the audio manager for this workspace.
             * @return {Blockly.WorkspaceAudio} The audio manager for this workspace.
             */
            getAudioManager(): Blockly.WorkspaceAudio;
    
            /**
             * Get the grid object for this workspace, or null if there is none.
             * @return {Blockly.Grid} The grid object for this workspace.
             * @package
             */
            getGrid(): Blockly.Grid;
    } 
    
}

declare module Blockly.WorkspaceSvg {

    /**
     * Get the dimensions of the given workspace component, in pixels.
     * @param {Blockly.Toolbox|Blockly.Flyout} elem The element to get the
     *     dimensions of, or null.  It should be a toolbox or flyout, and should
     *     implement getWidth() and getHeight().
     * @return {!Object} An object containing width and height attributes, which
     *     will both be zero if elem did not exist.
     * @private
     */
    function getDimensionsPx_(elem: Blockly.Toolbox|Blockly.Flyout): Object;

    /**
     * Get the content dimensions of the given workspace, taking into account
     * whether or not it is scrollable and what size the workspace div is on screen.
     * @param {!Blockly.WorkspaceSvg} ws The workspace to measure.
     * @param {!Object} svgSize An object containing height and width attributes in
     *     CSS pixels.  Together they specify the size of the visible workspace, not
     *     including areas covered up by the toolbox.
     * @return {!Object} The dimensions of the contents of the given workspace, as
     *     an object containing at least
     *     - height and width in pixels
     *     - left and top in pixels relative to the workspace origin.
     * @private
     */
    function getContentDimensions_(ws: Blockly.WorkspaceSvg, svgSize: Object): Object;

    /**
     * Get the bounding box for all workspace contents, in pixels.
     * @param {!Blockly.WorkspaceSvg} ws The workspace to inspect.
     * @return {!Object} The dimensions of the contents of the given workspace, as
     *     an object containing
     *     - height and width in pixels
     *     - left, right, top and bottom in pixels relative to the workspace origin.
     * @private
     */
    function getContentDimensionsExact_(ws: Blockly.WorkspaceSvg): Object;

    /**
     * Calculate the size of a scrollable workspace, which should include room for a
     * half screen border around the workspace contents.
     * @param {!Blockly.WorkspaceSvg} ws The workspace to measure.
     * @param {!Object} svgSize An object containing height and width attributes in
     *     CSS pixels.  Together they specify the size of the visible workspace, not
     *     including areas covered up by the toolbox.
     * @return {!Object} The dimensions of the contents of the given workspace, as
     *     an object containing
     *     - height and width in pixels
     *     - left and top in pixels relative to the workspace origin.
     * @private
     */
    function getContentDimensionsBounded_(ws: Blockly.WorkspaceSvg, svgSize: Object): Object;

    /**
     * Return an object with all the metrics required to size scrollbars for a
     * top level workspace.  The following properties are computed:
     * Coordinate system: pixel coordinates.
     * .viewHeight: Height of the visible rectangle,
     * .viewWidth: Width of the visible rectangle,
     * .contentHeight: Height of the contents,
     * .contentWidth: Width of the content,
     * .viewTop: Offset of top edge of visible rectangle from parent,
     * .viewLeft: Offset of left edge of visible rectangle from parent,
     * .contentTop: Offset of the top-most content from the y=0 coordinate,
     * .contentLeft: Offset of the left-most content from the x=0 coordinate.
     * .absoluteTop: Top-edge of view.
     * .absoluteLeft: Left-edge of view.
     * .toolboxWidth: Width of toolbox, if it exists.  Otherwise zero.
     * .toolboxHeight: Height of toolbox, if it exists.  Otherwise zero.
     * .flyoutWidth: Width of the flyout if it is always open.  Otherwise zero.
     * .flyoutHeight: Height of flyout if it is always open.  Otherwise zero.
     * .toolboxPosition: Top, bottom, left or right.
     * @return {!Object} Contains size and position metrics of a top level
     *   workspace.
     * @private
     * @this Blockly.WorkspaceSvg
     */
    function getTopLevelWorkspaceMetrics_(): Object;

    /**
     * Sets the X/Y translations of a top level workspace to match the scrollbars.
     * @param {!Object} xyRatio Contains an x and/or y property which is a float
     *     between 0 and 1 specifying the degree of scrolling.
     * @private
     * @this Blockly.WorkspaceSvg
     */
    function setTopLevelWorkspaceMetrics_(xyRatio: Object): void;
}

declare module Blockly.Xml {

    /**
     * Encode a block tree as XML.
     * @param {!Blockly.Workspace} workspace The workspace containing blocks.
     * @param {boolean=} opt_noId True if the encoder should skip the block IDs.
     * @return {!Element} XML document.
     */
    function workspaceToDom(workspace: Blockly.Workspace, opt_noId?: boolean): Element;

    /**
     * Encode a list of variables as XML.
     * @param {!Array.<!Blockly.VariableModel>} variableList List of all variable
     *     models.
     * @return {!Element} List of XML elements.
     */
    function variablesToDom(variableList: Blockly.VariableModel[]): Element;

    /**
     * Encode a block subtree as XML with XY coordinates.
     * @param {!Blockly.Block} block The root block to encode.
     * @param {boolean=} opt_noId True if the encoder should skip the block ID.
     * @return {!Element} Tree of XML elements.
     */
    function blockToDomWithXY(block: Blockly.Block, opt_noId?: boolean): Element;

    /**
     * Encode a block subtree as XML.
     * @param {!Blockly.Block} block The root block to encode.
     * @param {boolean=} opt_noId True if the encoder should skip the block ID.
     * @return {!Element} Tree of XML elements.
     */
    function blockToDom(block: Blockly.Block, opt_noId?: boolean): Element;

    /**
     * Deeply clone the shadow's DOM so that changes don't back-wash to the block.
     * @param {!Element} shadow A tree of XML elements.
     * @return {!Element} A tree of XML elements.
     * @private
     */
    function cloneShadow_(shadow: Element): Element;

    /**
     * Converts a DOM structure into plain text.
     * Currently the text format is fairly ugly: all one line with no whitespace.
     * @param {!Element} dom A tree of XML elements.
     * @return {string} Text representation.
     */
    function domToText(dom: Element): string;

    /**
     * Converts a DOM structure into properly indented text.
     * @param {!Element} dom A tree of XML elements.
     * @return {string} Text representation.
     */
    function domToPrettyText(dom: Element): string;

    /**
     * Converts plain text into a DOM structure.
     * Throws an error if XML doesn't parse.
     * @param {string} text Text representation.
     * @return {!Element} A tree of XML elements.
     */
    function textToDom(text: string): Element;

    /**
     * Decode an XML DOM and create blocks on the workspace.
     * @param {!Element} xml XML DOM.
     * @param {!Blockly.Workspace} workspace The workspace.
     * @return {Array.<string>} An array containing new block IDs.
     */
    function domToWorkspace(xml: Element, workspace: Blockly.Workspace): string[];

    /**
     * Decode an XML DOM and create blocks on the workspace. Position the new
     * blocks immediately below prior blocks, aligned by their starting edge.
     * @param {!Element} xml The XML DOM.
     * @param {!Blockly.Workspace} workspace The workspace to add to.
     * @return {Array.<string>} An array containing new block IDs.
     */
    function appendDomToWorkspace(xml: Element, workspace: Blockly.Workspace): string[];

    /**
     * Decode an XML block tag and create a block (and possibly sub blocks) on the
     * workspace.
     * @param {!Element} xmlBlock XML block element.
     * @param {!Blockly.Workspace} workspace The workspace.
     * @return {!Blockly.Block} The root block created.
     */
    function domToBlock(xmlBlock: Element, workspace: Blockly.Workspace): Blockly.Block;

    /**
     * Decode an XML list of variables and add the variables to the workspace.
     * @param {!Element} xmlVariables List of XML variable elements.
     * @param {!Blockly.Workspace} workspace The workspace to which the variable
     *     should be added.
     */
    function domToVariables(xmlVariables: Element, workspace: Blockly.Workspace): void;

    /**
     * Decode an XML block tag and create a block (and possibly sub blocks) on the
     * workspace.
     * @param {!Element} xmlBlock XML block element.
     * @param {!Blockly.Workspace} workspace The workspace.
     * @return {!Blockly.Block} The root block created.
     * @private
     */
    function domToBlockHeadless_(xmlBlock: Element, workspace: Blockly.Workspace): Blockly.Block;

    /**
     * Remove any 'next' block (statements in a stack).
     * @param {!Element} xmlBlock XML block element.
     */
    function deleteNext(xmlBlock: Element): void;
}

declare module Blockly {

    class ZoomControls extends ZoomControls__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ZoomControls__Class  { 
    
            /**
             * Class for a zoom controls.
             * @param {!Blockly.Workspace} workspace The workspace to sit in.
             * @constructor
             */
            constructor(workspace: Blockly.Workspace);
    
            /**
             * Width of the zoom controls.
             * @type {number}
             * @private
             */
            WIDTH_: number;
    
            /**
             * Height of the zoom controls.
             * @type {number}
             * @private
             */
            HEIGHT_: number;
    
            /**
             * Distance between zoom controls and bottom edge of workspace.
             * @type {number}
             * @private
             */
            MARGIN_BOTTOM_: number;
    
            /**
             * Distance between zoom controls and right edge of workspace.
             * @type {number}
             * @private
             */
            MARGIN_SIDE_: number;
    
            /**
             * The SVG group containing the zoom controls.
             * @type {Element}
             * @private
             */
            svgGroup_: Element;
    
            /**
             * Left coordinate of the zoom controls.
             * @type {number}
             * @private
             */
            left_: number;
    
            /**
             * Top coordinate of the zoom controls.
             * @type {number}
             * @private
             */
            top_: number;
    
            /**
             * Create the zoom controls.
             * @return {!Element} The zoom controls SVG group.
             */
            createDom(): Element;
    
            /**
             * Initialize the zoom controls.
             * @param {number} bottom Distance from workspace bottom to bottom of controls.
             * @return {number} Distance from workspace bottom to the top of controls.
             */
            init(bottom: number): number;
    
            /**
             * Dispose of this zoom controls.
             * Unlink from all DOM elements to prevent memory leaks.
             */
            dispose(): void;
    
            /**
             * Move the zoom controls to the bottom-right corner.
             */
            position(): void;
    } 
    
}
