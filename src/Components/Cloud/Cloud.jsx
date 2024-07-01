import "../../Styles/Cloud/Cloud.css";

const Cloud = () => {
  return (
    <div>
      <div className="grid grid-col-1 md:grid-cols-1 lg:grid-cols-2 mt-20">
        <div>
          <div className="cloud-1 text-white pt-24 pr-32">
            <div className="text-end">
              <h1 className=" text-2xl font-semibold mb-2">Oracle Cloud</h1>

              <h1 className="text-4xl font-extrabold mb-2">Applications</h1>
              <p className="pl-24 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                accusamus. Perferendis sunt temporibus deleniti nulla labore
                accusamus, maxime autem? Itaque!
              </p>
              <button className="btn btn-primary text-white">Button</button>
            </div>
            <div></div>
          </div>
        </div>

        <div>
          <div className="cloud-2 text-white pt-24 pr-32">
            <div className="text-end">
              <h1 className=" text-2xl font-semibold mb-2">Oracle Cloud</h1>

              <h1 className="text-4xl font-extrabold mb-2">Applications</h1>
              <p className="pl-24 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                accusamus. Perferendis sunt temporibus deleniti nulla labore
                accusamus, maxime autem? Itaque!
              </p>
              <button className="btn btn-primary text-white">Button</button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
