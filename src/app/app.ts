import { Component, signal } from '@angular/core';
import { TngSnackbarHost, TngSnackbarIntent, TngSnackbarItem } from '@tailng-ui/ui/overlay';
const uid = () => Math.random().toString(36).slice(2, 9);
type Position = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

@Component({
  selector: 'app-root',
  imports: [ TngSnackbarHost],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    readonly position = signal<Position>('bottom-center');

  items = signal<TngSnackbarItem[]>([]);
showSnackbar() {
  this.items.set([{ id: crypto.randomUUID(), message: 'Hello from Tailng', durationMs: 4000 }, ...this.items()]);
}
onDismiss(ev: { id: string; reason: 'timeout' | 'dismiss' | 'action' }) {
  this.items.set(this.items().filter((x) => x.id !== ev.id));
}
readonly customIntentKlass = (intent: TngSnackbarIntent): string => {
    switch (intent) {
      case 'success': return 'border-green-500/50';
      case 'info': return 'border-blue-500/50';
      case 'warning': return 'border-amber-500/50';
      case 'error': return 'border-red-500/50';
      default: return '';
    }
  };
    readonly themedItems = signal<TngSnackbarItem[]>([]);

  showThemed(): void {
    const item: TngSnackbarItem = {
      id: uid(),
      message: 'Themed snackbar (warning)',
      intent: 'warning',
      durationMs: 4000,
    };
    this.themedItems.set([item, ...this.themedItems()].slice(0, 2));
  }

  onThemedDismiss(ev: { id: string; reason: 'timeout' | 'dismiss' | 'action' }): void {
    this.themedItems.set(this.themedItems().filter((x) => x.id !== ev.id));
  }
  push(intent: TngSnackbarItem['intent']): void {
    const id = uid();
    const message =
      intent === 'success' ? 'Saved successfully'
      : intent === 'info' ? 'New update available'
      : intent === 'warning' ? 'Please check required fields'
      : intent === 'error' ? 'Failed to save. Try again.'
      : 'Hello from Tailng';
    const item: TngSnackbarItem = {
      id,
      message,
      intent: intent ?? 'default',
      actionLabel: intent === 'error' ? 'Retry' : 'Undo',
      durationMs: 4000,
    };
    this.items.set([item, ...this.items()].slice(0, 3));
  }
}
