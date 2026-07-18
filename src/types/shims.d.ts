declare namespace React {
  type ReactNode = unknown;
  interface ButtonHTMLAttributes<T> { className?: string; disabled?: boolean; onClick?: () => void; [key: string]: unknown; }
}
declare namespace JSX { interface IntrinsicAttributes { key?: string | number; } interface ElementChildrenAttribute { children: {}; } interface IntrinsicElements { [elemName: string]: any; } }
declare module "*.css";
declare module "react" { export type ReactNode = unknown; export type ButtonHTMLAttributes<T> = React.ButtonHTMLAttributes<T>; export function useEffect(effect: () => void | (() => void), deps?: unknown[]): void; export function useState<T>(initial: T): [T, (value: T) => void]; export function useRef<T>(initial: T): { current: T }; }
declare module "next" { export type Metadata = Record<string, any>; export type Viewport = Record<string, any>; export type NextConfig = Record<string, any>; }
declare module "next/link" { const Link: (props: any) => any; export default Link; }
declare module "next/font/google" { export function Inter(options: any): { variable: string }; export function Cormorant_Garamond(options: any): { variable: string }; export function IBM_Plex_Mono(options: any): { variable: string }; }
declare module "@vercel/analytics/react" { export function Analytics(): any; }
declare module "next-themes" { export type ThemeProviderProps = { children?: React.ReactNode; [key: string]: unknown }; export function ThemeProvider(props: ThemeProviderProps): any; export function useTheme(): { theme?: string; setTheme: (theme: string) => void }; }
declare module "lucide-react" { export const Heart: (props: any) => any; export const Search: (props: any) => any; export const ArrowRight: (props: any) => any; export const Box: (props: any) => any; export const ChevronRight: (props: any) => any; export const Menu: (props: any) => any; export const X: (props: any) => any; export const Moon: (props: any) => any; export const Sun: (props: any) => any; export const CheckCircle: (props: any) => any; export const Globe2: (props: any) => any; export const HeartHandshake: (props: any) => any; export const LockKeyhole: (props: any) => any; export const MapPin: (props: any) => any; export const ShieldCheck: (props: any) => any; export const Sparkles: (props: any) => any; export const UsersRound: (props: any) => any; }
declare module "class-variance-authority" { export type VariantProps<T> = any; export function cva(base?: string, config?: any): (props?: any) => string; }
declare module "clsx" { export type ClassValue = unknown; export function clsx(...inputs: ClassValue[]): string; }
declare module "tailwind-merge" { export function twMerge(...classes: string[]): string; }
declare module "@sanity/client" { export function createClient(config: any): any; }
declare module "zod" { export const z: any; }
declare module "vitest" { export function describe(name: string, fn: () => void): void; export function it(name: string, fn: () => void): void; export const expect: any; }
declare module "vitest/config" { export function defineConfig(config: any): any; }
declare module "@playwright/test" { export const devices: Record<string, any>; export function defineConfig(config: any): any; }
declare module "tailwindcss" { export type Config = any; }
declare const process: { env: Record<string, string | undefined> };
declare const URL: any;

declare const window: any;
declare const document: any;
declare const performance: any;
declare function requestAnimationFrame(callback: (time: number) => void): number;
declare class IntersectionObserver { constructor(callback: (entries: any[]) => void, options?: any); observe(target: any): void; disconnect(): void; }
type KeyboardEvent = any;
type HTMLElement = any;
type HTMLDivElement = any;

declare module "framer-motion" { export const motion: any; export function useReducedMotion(): boolean; }
