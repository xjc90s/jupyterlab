// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

import { CodeEditorWrapper } from '@jupyterlab/codeeditor';
import { editorServices } from '@jupyterlab/codemirror';
import { CodeCellModel } from './model';
import { Cell } from './widget';

/**
 * The default notebook content.
 */

export namespace NBTestUtils {
  export const editorFactory =
    editorServices.factoryService.newInlineEditor.bind(
      editorServices.factoryService
    );

  export const mimeTypeService = editorServices.mimeTypeService;
  /**
   * Create a base cell content factory.
   */
  export function createBaseCellFactory(): Cell.IContentFactory {
    return new Cell.ContentFactory({ editorFactory });
  }

  /**
   * Create a new code cell content factory.
   */
  export function createCodeCellFactory(): Cell.IContentFactory {
    return new Cell.ContentFactory({ editorFactory });
  }

  /**
   * Create a cell editor widget.
   */
  export function createCellEditor(model?: CodeCellModel): CodeEditorWrapper {
    return new CodeEditorWrapper({
      model: model || new CodeCellModel({}),
      factory: editorFactory
    });
  }
}
