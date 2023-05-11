type SmCardTypes = {
  title: string,
  description: string
}

export default function SmCard({title, description}:SmCardTypes) {
    return (
      <div className="border-2 border-black p-9 rounded-lg">
        <div className="font-bold mb-1 text-lg" >{title}</div>
        <p className="text-sm" >{description}</p>
      </div>
    );
  }
  