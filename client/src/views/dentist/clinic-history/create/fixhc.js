export default function fixhc(data, Id) {
  const fixedDate = {
    b_smoker: data.Smoker.value,
    b_useDrugs: data['Use drugs'].value,
    b_pregnant: data.Pregnant.value,
    b_takeMedicine: data['Take medicine'].value,
    b_sufferedFromIllness: data['Suffered from illness'].value,
    b_alergicToMedicine: data['Alergic to medicine'].value,
    b_normalWoundHealing: data['Normal wound healing'].value,
    b_other: null,
    ic_anginaPectoris: data['Angina pectoris'].value,
    ic_myocardialInfarction: data['Myocardial infarction'].value,
    ic_hypertension: data.Hypertension.value,
    ic_vascularAffections: data['Vascular affections'].value,
    ic_other: null,
    ih_anemia: data.Anemia.value,
    ih_leukemia: data.Leukemia.value,
    ih_haemophilia: data.Haemophilia.value,
    ih_alterationWhiteSerie: data['Alteration white serie'].value,
    ih_other: null,
    ir_asthma: data.Asthma.value,
    ir_pulmonaryEdema: data['Pulmonary edema'].value,
    ir_ephysemia: data['Ephysemia'].value,
    ir_tuberculosis: data['Tuberculosis'].value,
    ir_chronicBronchitis: data['Chronic bronchitis'].value,
    ir_other: null,
    ig_ulcer: data.Ulcer.value,
    ig_hepatitis: data['Hepatitis'].value,
    ig_cirrohsis: data['Cirrohsis'].value,
    ig_other: null,
    in_epilepsy: data['Epilepsy'].value,
    in_useOfTranquilizers: data['Use of tranquilizers'].value,
    in_seizures: data['Seizures'].value,
    in_other: null,
    ib_osteoporosis: data['Osteoporosis'].value,
    ib_paget: data['Paget'].value,
    ib_rickets: data['Rickets'].value,
    ib_osteomalacia: data['Osteomalacia'].value,
    ib_other: null,
    patient: Id,
  };
  return fixedDate;
}
