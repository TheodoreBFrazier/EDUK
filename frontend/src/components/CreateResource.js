import { useState } from "react";

function CreateResource() {
  const [resource, setResource] = useState({
    resourceName: "",
    description: "",
    resource_category: "",
    start_datetime: "",
    end_datetime: "",
    url: "",
    isverified: false,
  });
  return (
    <div>
      <form>
        <input id="rid" value={} />
      </form>
    </div>
  );
}

export default CreateResource;
