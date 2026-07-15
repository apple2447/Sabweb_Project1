export default function ProductForm() {
    return (
        <div>
            <h1> สินค้า </h1>
            <form>
               <input type="text" name="name" />    <br/>  
               <textarea name="description" placeholder="กรอกรายละเอียด"></textarea>
               <button>บันทึกข้อมูล</button>
            </form>
        </div>
    );
}