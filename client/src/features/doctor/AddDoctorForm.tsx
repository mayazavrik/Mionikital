import React, { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { addDoctor } from "./doctorSlice";
// import type { DoctorCard } from "./types/types";
import "./style/style.css";

export default function AddDoctorForm(): JSX.Element {
	const [title, setTitle] = useState("");
	const [about, setAbout] = useState("");

  const [img, setImg] =  useState<File | null>(null);

	const dispatch = useAppDispatch();

	const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async(e) => {
		e.preventDefault();
		if(!img) {
		  alert('Добавьте фото');
		  return;
		}
		const formData = new FormData();
		formData.append('title',title);
		formData.append('about',about);
		
		formData.append('img',img);
		dispatch(addDoctor(formData));
		setImg(null);
		setTitle('');
		setAbout('');
		
	  };
	  const onFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		console.log(e.target.files);
		if (e.target.files) {
		  setImg(e.target.files[0]);
		}
	  }
	return (
		<div className="form__container">
			<form className="formsale" onSubmit={onHandleSubmit}>
				<label className="form__label">
					Имя врача
					<input
						className="biginput"
						value={title}
						name="text"
						type="text"
						onChange={(e) => setTitle(e.target.value)}
					/>
				</label>
        <label className="form__label">
					Фото врача
					<input
            className="form__label"
        
            name="img"
            type="file"
            onChange={onFileChange}
          />
				</label>
				<label className="form__label">
					О враче
					<input
						className="biginput"
						value={about}
						name="text"
						type="text"
						onChange={(e) => setAbout(e.target.value)}
					/>
				</label>

				<button type="submit">Отправить</button>
			</form>
		</div>
	);
}
