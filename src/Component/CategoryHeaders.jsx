

const CategoryHeaders = ({text,bg,l}) => {
    return (
        <div>
            <div className={`${bg} flex justify-center py-3 items-center gap-2`}>
                <h2>{text}</h2>
                <span className="border rounded-full border-black p-1">{l}</span>

            </div>
        </div>
    );
};

export default CategoryHeaders;