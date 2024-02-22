import { Container, Typography, Grid, Paper } from '@mui/material';

const Footer = () => {
  return (
    <Paper style={{ backgroundColor: '#f0f0f0', padding: '20px', marginTop: '20px', marginBlock: 'auto 0' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={1}>
            <Typography variant="h10" gutterBottom>
              회사소개
            </Typography>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Typography variant="h10" gutterBottom>
              인재채용
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h10" gutterBottom>
              제휴/광고부대사업문의
            </Typography>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Typography variant="h10" gutterBottom>
              이용약관
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h10" gutterBottom fontWeight="bold">
              개인정보처리방침
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: '10px' }}>
          <Grid item xs={12} sm={12}>
            <Typography variant="body2">서울특별시 성동구 왕십리로 50, 6층 (성수동1가, 메가박스 스퀘어) ARS 1544-0070 대표이메일 m.dreamcenter@partner.megabox.co.kr</Typography>
            <Typography variant="body2">대표자명 홍정인 · 개인정보보호책임자 강병철 · 사업자등록번호 211-86-59478 · 통신판매업신고번호 2023-서울성동-0177</Typography>
            <Typography variant="body2">COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved</Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Footer;
