// src/components/Input.jsx
export default function Input({ placeholder, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3 rounded-xl border border-[#DCECD4] bg-[#F4F7E4] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#9CC49D]"
    />
  );
}
