export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <div className="">
      {children}
    </div>
  )
}