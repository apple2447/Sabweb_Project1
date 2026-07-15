export default function CategoryFrom() {
    return (
        <div>
            <h1> หมวดหมู่สินค้า</h1>
            <form>
                <input type="text" name="name" placeholder="ชื่อประเภทสินค้า" required/> <br/>
                <textarea name="description" placeholder="กรอกรายละเอียด"></textarea>
                <button>บันทึกข้อมูล</button>
            </form>
        </div>
    );
}