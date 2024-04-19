export interface TextProps {
  variant?: 'heading' | 'subheading' | 'content';
  disabled?: boolean;
  backgroundColor: string;
  children: React.ReactNode;
}
