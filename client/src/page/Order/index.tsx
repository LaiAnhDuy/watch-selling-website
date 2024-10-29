const Order = () => {
  return (
    <div className="bg-stone-100">
      <div className="max-w-[80vw] mx-auto py-10">
        <p className="text-3xl font-bold ">Giỏ hàng</p>
        <hr className="w-14 h-[2px] bg-red-500 mt-2" />
        <div className="grid grid-cols-3 gap-x-10 mt-10">
          <div className="col-span-2 bg-white h-96"></div>
          <div className="text-xl font-medium bg-white">
            <div className="m-5">
              <p className="mb-5">Địa chỉ</p>
              <hr />
              <div>
                <div className="flex justify-between mt-5">
                  <p>Tạm tính</p>
                  <p className="text-red-500">0đ</p>
                </div>
                <div className="flex justify-between my-5">
                  <p>Mã giảm giá</p>
                  <p className="text-red-500">0đ</p>
                </div>
                <div className="flex justify-between mb-5">
                  <p>Phí giao hàng</p>
                  <p className="text-red-500">0đ</p>
                </div>
              </div>
              <hr />
              <div className="flex justify-between mt-5 items-center">
                <p>Tổng tiền</p>
                <div>
                  <p className="text-red-500 text-3xl">0đ</p>
                  <p className="text-xs">(Đã bao gồm VAT nếu có)</p>
                </div>
              </div>
            </div>
            <button className="w-full p-3 text-xl bg-red-500 text-white mt-5 hover:bg-red-400 active:bg-red-500">
              Mua hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
