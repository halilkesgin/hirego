const MessageSidebar = () => {
    return (
        <div className="h-full">
            <div className="space-y-4 w-[500px] py-4 flex flex-col h-[600px] bg-white dark:bg-background border-r">
                <div className="overflow-y-auto scroll-smooth px-3 py-2 flex-1">
                    <div className="flex flex-col space-y-4">
                        <div className="w-12 h-12 flex flex-col items-center justify-center rounded-md bg-sky-100">

                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default MessageSidebar