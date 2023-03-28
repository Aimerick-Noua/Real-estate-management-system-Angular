import { Directive, EventEmitter, HostBinding, Output } from '@angular/core';
import { HostListener } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from './file-handle';
@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

@Output() files:EventEmitter<FileHandle>=new EventEmitter()

  @HostBinding("style.background") private background = "#eee";
  constructor(private sanitizer: DomSanitizer) { }
  @HostListener("dragover", ["$event"])
  public onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#aaa";
  }
  @HostListener("dragover", ["$event"])
  public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#eee";
  }

  @HostListener("drop", ["$event"])
  public Drop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#eee";

    let fileHandle: FileHandle;
    const file = evt. dataTransfer!.files[0];
    const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
    fileHandle={file,url};
    this.files.emit(fileHandle);
  }
}
