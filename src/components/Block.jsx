// src/components/Background.jsx
export default function Background({ children }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#E9EFC9] via-[#BFD9B8] to-[#9CC49D] flex items-center justify-center">
      {children}
    </div>
  );
}
