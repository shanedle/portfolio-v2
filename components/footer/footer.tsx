export const Footer = () => {
  return (
    <footer className="bg-zinc-900 inset-x-0 bottom-0 min-w-full">
      <div className="md:max-w-4xl xl:max-w-6xl mx-auto text-rose-200 flex justify-center items-center py-4">
        <div>
          &copy; {new Date().getFullYear()}, Designed and hand-coded by Shane Le
        </div>
      </div>
    </footer>
  );
};
