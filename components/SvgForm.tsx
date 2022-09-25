import React, { useEffect } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

type Props = {
  onChange: (v: SvgData) => void;
};

function SvgForm({ onChange }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SvgData>();
  const onSubmit: SubmitHandler<SvgData> = (data) => console.log(data);

  useEffect(() => {
    const subscription = watch((values) => onChange(values), {
      date: new Date().toISOString().substring(0, 10),
      text: 'New Year',
    });
    return () => subscription.unsubscribe();
  }, [watch, onChange]);

  return (
    <form
      className="flex flex-col w-full max-w-xs"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <input
          type="date"
          className="input input-bordered"
          defaultValue={new Date().toISOString().substring(0, 10)}
          {...register('date', { required: true })}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Text</span>
        </label>
        <input
          type="text"
          className="input input-bordered"
          defaultValue="New Year"
          {...register('text', { required: true })}
        />
      </div>
    </form>
  );
}

export default SvgForm;
