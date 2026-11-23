class Student{
    #marsk = 5      // this # makes it a private field
    constructor(r_no, name, course){
        this.r_no = r_no
        this.name = name
        this.course = course
    }

    getMarks(){
        console.log(this.#marsk)
    }

    setMarks(marks){
        this.#marsk = marks
    }
}

const s1 = new Student