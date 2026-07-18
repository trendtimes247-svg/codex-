declare namespace React {
  type ReactNode = unknown;
  interface FormEvent<T> { preventDefault(): void; currentTarget: T; }
  interface ButtonHTMLAttributes<T> { className?: string; disabled?: boolean; onClick?: () => void; [key: string]: unknown; }
}
declare namespace JSX { interface IntrinsicAttributes { key?: string | number; } interface ElementChildrenAttribute { children: unknown; } interface IntrinsicElements { [elemName: string]: Record<string, unknown>; } }
declare module "*.css";
declare module "react" { export type ReactNode = unknown; export type FormEvent<T> = React.FormEvent<T>; export type ButtonHTMLAttributes<T> = React.ButtonHTMLAttributes<T>; export function useEffect(effect: () => void | (() => void), deps?: unknown[]): void; export function useState<T>(initial: T): [T, (value: T) => void]; export function useRef<T>(initial: T): { current: T }; export function useMemo<T>(factory: () => T, deps: unknown[]): T; }
declare module "next" { export type Metadata = Record<string, any>; export type Viewport = Record<string, any>; export type NextConfig = Record<string, any>; export namespace MetadataRoute { type Robots = unknown; type Sitemap = unknown; } }
declare module "next/link" { const Link: (props: Record<string, unknown>) => unknown; export default Link; }
declare module "next/font/google" { export function Inter(options: Record<string, unknown>): { variable: string }; export function Cormorant_Garamond(options: Record<string, unknown>): { variable: string }; export function IBM_Plex_Mono(options: Record<string, unknown>): { variable: string }; }
declare module "@vercel/analytics/react" { export function Analytics(): unknown; }
declare module "next-themes" { export type ThemeProviderProps = { children?: React.ReactNode; [key: string]: unknown }; export function ThemeProvider(props: ThemeProviderProps): unknown; export function useTheme(): { theme?: string; setTheme: (theme: string) => void }; }
declare module "lucide-react" { export const Heart: (props: Record<string, unknown>) => unknown; export const Search: (props: Record<string, unknown>) => unknown; export const ArrowRight: (props: Record<string, unknown>) => unknown; export const Box: (props: Record<string, unknown>) => unknown; export const ChevronRight: (props: Record<string, unknown>) => unknown; export const Menu: (props: Record<string, unknown>) => unknown; export const X: (props: Record<string, unknown>) => unknown; export const Moon: (props: Record<string, unknown>) => unknown; export const Sun: (props: Record<string, unknown>) => unknown; export const CheckCircle: (props: Record<string, unknown>) => unknown; export const Globe2: (props: Record<string, unknown>) => unknown; export const HeartHandshake: (props: Record<string, unknown>) => unknown; export const LockKeyhole: (props: Record<string, unknown>) => unknown; export const MapPin: (props: Record<string, unknown>) => unknown; export const ShieldCheck: (props: Record<string, unknown>) => unknown; export const Sparkles: (props: Record<string, unknown>) => unknown; export const UsersRound: (props: Record<string, unknown>) => unknown; }
declare module "class-variance-authority" { export type VariantProps<T> = any; export function cva(base?: string, config?: unknown): (props?: unknown) => string; }
declare module "clsx" { export type ClassValue = unknown; export function clsx(...inputs: ClassValue[]): string; }
declare module "tailwind-merge" { export function twMerge(...classes: string[]): string; }
declare module "@sanity/client" { export function createClient(config: any): any; }
declare module "zod" { export const z: any; }
declare module "vitest" { export function describe(name: string, fn: () => void): void; export function it(name: string, fn: () => void): void; export const expect: any; }
declare module "vitest/config" { export function defineConfig(config: any): any; }
declare module "@playwright/test" { export const devices: Record<string, unknown>; export function defineConfig(config: any): any; }
declare module "tailwindcss" { export type Config = any; }
declare const process: { env: Record<string, string | undefined> };
declare const URL: { new(input: string, base?: unknown): { toString(): string } };
declare const window: { matchMedia(query: string): { matches: boolean; addEventListener(type: string, listener: () => void): void; removeEventListener(type: string, listener: () => void): void } };
declare const document: { activeElement: HTMLElement | null };
declare const performance: { now(): number };
declare function requestAnimationFrame(callback: (time: number) => void): number;
declare class FormData { constructor(form?: HTMLFormElement); get(name: string): FormDataEntryValue | null; }
type FormDataEntryValue = string;
type KeyUsage = "sign" | "verify";
type KeyboardEvent = unknown;
type HTMLElement = { focus(): void; querySelectorAll?<T>(selector: string): T[] };
type HTMLDivElement = HTMLElement;
type HTMLFormElement = HTMLElement;
declare module "framer-motion" { export const motion: any; export function useReducedMotion(): boolean; }
declare module "next/image" { const Image: (props: Record<string, unknown>) => unknown; export default Image; }
declare module "next/headers" { export function draftMode(): { isEnabled: boolean }; export function cookies(): { get: (name: string) => { value: string } | undefined; set: (name: string, value: string, options?: unknown) => void; delete: (name: string) => void }; }
declare module "next/cache" { export function unstable_cache<T extends (...args: never[]) => unknown>(fn: T, keys: string[], options?: { revalidate?: number; tags?: string[] }): T; }
declare module "@sanity/image-url" { export default function imageUrlBuilder(config: { projectId: string; dataset: string }): { image: (source: unknown) => { width: (value: number) => { quality: (value: number) => { auto: (value: string) => { url: () => string } } } } }; }
declare module "sanity" { type Rule = { required: () => Rule; min: (value: number) => Rule; max: (value: number) => Rule }; type Field = { name?: string; title?: string; type?: string; rows?: number; initialValue?: unknown; to?: unknown[]; of?: unknown[]; options?: unknown; fields?: unknown[]; validation?: (rule: Rule) => Rule }; export function defineField(field: Field): Field; export function defineType<T extends Field>(type: T): T; }
declare module "next/navigation" { export function redirect(url: string): never; export function notFound(): never; }
declare module "next/server" { export const NextResponse: { json: (body: unknown, init?: { status?: number }) => Response }; }
declare module "next/dynamic" { export default function dynamic(loader: () => Promise<unknown>, options?: unknown): any; }
declare module "@react-three/fiber" { export const Canvas: (props: Record<string, unknown>) => unknown; export function useFrame(callback: (state: unknown, delta: number) => void): void; }
declare module "@react-three/drei" { export const Float: (props: Record<string, unknown>) => unknown; export const Sphere: (props: Record<string, unknown>) => unknown; export const OrbitControls: (props: Record<string, unknown>) => unknown; }
declare module "gsap" { const gsap: { registerPlugin(plugin: unknown): void; utils: { toArray(selector: string): unknown[] }; fromTo(element: unknown, from: Record<string, unknown>, to: Record<string, unknown>): { kill(): void } }; export default gsap; }
declare module "gsap/ScrollTrigger" { export const ScrollTrigger: { getAll(): Array<{ kill(): void }> }; }
