import ThemeToggeler from "@/components/ThemeToggeler"

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div  className="flex items-center justify-center relative h-[100vh]">
      <div className="absolute right-5 bottom-5">
        <ThemeToggeler />
      </div>
        {children}
    </div>
  )
}

export default layout