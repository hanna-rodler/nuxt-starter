type BaseButtonTag = 'a' | 'button';
type BaseButtonVariant =
  'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'link'
  | 'link-primary'
  | 'link-secondary'
  | 'warning';

export interface BaseButton {
  tag?: BaseButtonTag,
  variant?: BaseButtonVariant,
  link?: string,
  target?: '_self' | '_blank' | '_parent' | '_top'
}