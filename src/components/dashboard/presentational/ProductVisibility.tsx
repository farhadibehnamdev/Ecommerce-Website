const notificationMethods = [
  { id: "hidden", title: "Hidden" },
  { id: "publish", title: "Publish" },
];
const ProductVisibility = function () {
  return (
    <div className="col-span-12 mb-5 rounded-md bg-white p-5 shadow-sm gap-x-8 gap-y-8 md:grid-cols-2">
      <label className="text-base font-semibold text-gray-900">
        Visibility
      </label>

      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4">
          {notificationMethods.map((notificationMethod) => (
            <div key={notificationMethod.id} className="flex items-center">
              <input
                id={notificationMethod.id}
                name="notification-method"
                type="radio"
                defaultChecked={notificationMethod.id === "email"}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor={notificationMethod.id}
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};
export default ProductVisibility;
